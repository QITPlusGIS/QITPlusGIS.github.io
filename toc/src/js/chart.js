/*
 * Chart to analyse Time of Concentration methodologies
 */

export const addChart = (app, Chart) => {
    app.charts = {};
    Chart.defaults.color = getComputedStyle(document.body).getPropertyValue('--qitp-primary-color');

    // Query layer to get all values for chart
    app.layers.rgToc
        .queryFeatures({
            where: `calc_toc = 1`,
            outFields: ['*'],
        })
        .then((results) => {
            if (results.features.length) {
                app.charts.tocLineChart = createTocLineChart(
                    app,
                    Chart,
                    results.features
                );
                app.charts.tocBubbleChart = createTocBubbleChart(
                    app,
                    Chart,
                    results.features
                );
                const tocBubbleChartToggle = document.getElementById(
                    'tocBubbleChartToggle'
                );
                tocBubbleChartToggle.addEventListener('click', () => {
                    toggleTocBubbleChart(app);
                });
            }
        });
};

const createTocLineChart = (app, Chart, features) => {
    const tocColors = app.tocColors;
    // Get chart canvas
    const cc = document.getElementById('tocLineChartCanvas');

    // Process values for chart
    const attributes = features.map((x) => x.attributes);
    // Sort by
    attributes.sort((a, b) => {
        return a.toc_kir - b.toc_kir;
    });
    const codes = attributes.map((x) => x.code);
    // Replace zeros by NaN for JBP values
    const tocJBP = attributes.map((x) => (x.toc_jbp ? x.toc_jbp : NaN));
    const tocKir = attributes.map((x) => x.toc_kir);
    const tocPil = attributes.map((x) => x.toc_pil);
    const tocBWAvg = attributes.map((x) => x.toc_bw_avg);
    const tocBWEqa = attributes.map((x) => x.toc_bw_eqa);

    // Create line chart to analyse TOC mothdologies
    const chart = new Chart(cc, {
        type: 'line',
        data: {
            labels: codes,
            datasets: [
                {
                    label: 'TOC JBP',
                    data: tocJBP,
                    pointRadius: 5,
                    borderColor: tocColors[0] + '33',
                    backgroundColor: tocColors[0],
                    tension: 0.4,
                },
                {
                    label: 'TOC Kirpich',
                    data: tocKir,
                    pointRadius: 5,
                    borderColor: tocColors[1] + '33',
                    backgroundColor: tocColors[1],
                    tension: 0.4,
                },
                {
                    label: 'TOC Pilgrim McDermott',
                    data: tocPil,
                    pointRadius: 5,
                    borderColor: tocColors[2] + '33',
                    backgroundColor: tocColors[2],
                    tension: 0.4,
                },
                {
                    label: 'TOC Bransby Williams (avg)',
                    data: tocBWAvg,
                    pointRadius: 5,
                    borderColor: tocColors[3] + '33',
                    backgroundColor: tocColors[3],
                    tension: 0.4,
                },
                {
                    label: 'TOC Bransby Williams (eqa)',
                    data: tocBWEqa,
                    pointRadius: 5,
                    borderColor: tocColors[4],
                    backgroundColor: tocColors[4],
                    tension: 0.4,
                    hidden: true,
                },
            ],
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                y: {
                    title: {
                        display: true,
                        text: 'TOC (h)',
                    },
                    min: 0,
                    max: 30,
                },
            },
            onClick: (event, clickedElements) => {
                if (clickedElements.length === 0) return;
                const { dataIndex, raw } = clickedElements[0].element.$context;
                const label = event.chart.data.labels[dataIndex];
                console.log(label);
                app.layers.rgToc
                    .queryFeatures({
                        where: `code = '${label}'`,
                        returnGeometry: true,
                    })
                    .then((results) => {
                        if (results.features.length) {
                            const f = results.features[0];
                            app.view.goTo(
                                { target: f.geometry, zoom: 15 },
                                { duration: 1000 }
                            );
                            app.view.openPopup({
                                features: [f],
                            });
                        }
                    });
            },
            plugins: {
                zoom: {
                    limits: {
                        y: {
                            min: 0,
                            max: 30,
                        },
                    },
                    zoom: {
                        wheel: { enabled: true },
                        drag: { enabled: true, threshold: 10 },
                    },
                },
                title: {
                    display: true,
                    text: 'Time of Concentration Methodologies per Gauge',
                },
            },
        },
    });

    cc.addEventListener('dblclick', () => {
        chart.resetZoom();
    });
    return chart;
};

const createTocBubbleChart = (app, Chart, features) => {
    const tocColors = app.tocColors;
    app.charts.tocBubbleData = {};
    app.charts.tocBubbleData.lfp_len = [];
    app.charts.tocBubbleData.sw_area = [];
    app.charts.tocBubbleData.slope_avg = [];
    app.charts.tocBubbleData.mode = 0;
    app.charts.tocBubbleData.params = [
        ['LFP Length', 'km'],
        ['Subwatershed Area', 'sqkm'],
        ['TOC', 'h'],
        ['Slope', 'm/km'], 
    ];
    const params = app.charts.tocBubbleData.params;

    // Get chart canvas
    const cc = document.getElementById('tocBubbleChartCanvas');
    const codes = [];
    const tocJBP = [];
    const tocKir = [];
    const tocPil = [];
    const tocBWAvg = [];
    const tocBWEqa = [];

    const generateScaleFunction = (prevMin, prevMax, newMin, newMax) => {
        var offset = newMin - prevMin,
            scale = (newMax - newMin) / (prevMax - prevMin);
        return function (x) {
            return offset + scale * x;
        };
    };

    // Process values for chart
    const attributes = features.map((x) => x.attributes);

    // Get max for length
    const maxLength = Math.max(...attributes.map((x) => x.lfp_len));
    // Get max for area
    const maxArea = Math.max(...attributes.map((x) => x.sw_area));
    const scaleLength = generateScaleFunction(0, maxLength, 5, 50);
    const scaleArea = generateScaleFunction(0, maxArea, 5, 50);

    for (const a of attributes) {
        codes.push(a.code);
        const length = Math.round(a.lfp_len / 10) / 100;
        app.charts.tocBubbleData.slope_avg.push(Math.round(a.lfp_dem_slope_avg * 100) / 100);
        const scaledlength = Math.round(scaleLength(a.lfp_len));
        app.charts.tocBubbleData.lfp_len.push([length, scaledlength]);
        const area = Math.round(a.sw_area / 10000) / 100;
        const scaledArea = Math.round(scaleArea(a.sw_area));
        app.charts.tocBubbleData.sw_area.push([area, scaledArea]);
        tocJBP.push({ x: length, y: area, r: a.toc_jbp ? a.toc_jbp : NaN });
        tocKir.push({ x: length, y: area, r: a.toc_kir });
        tocPil.push({ x: length, y: area, r: a.toc_pil });
        tocBWAvg.push({ x: length, y: area, r: a.toc_bw_avg });
        tocBWEqa.push({ x: length, y: area, r: a.toc_bw_eqa });
    }

    // Create line chart to analyse TOC mothdologies
    const chart = new Chart(cc, {
        type: 'bubble',
        data: {
            labels: codes,
            datasets: [
                {
                    label: 'TOC JBP',
                    data: tocJBP,
                    pointRadius: 5,
                    borderColor: tocColors[0],
                    backgroundColor: tocColors[0] + '33',
                },
                {
                    label: 'TOC Kirpich',
                    data: tocKir,
                    pointRadius: 5,
                    borderColor: tocColors[1],
                    backgroundColor: tocColors[1] + '33',
                },
                {
                    label: 'TOC Pilgrim McDermott',
                    data: tocPil,
                    pointRadius: 5,
                    borderColor: tocColors[2],
                    backgroundColor: tocColors[2] + '33',
                },
                {
                    label: 'TOC Bransby Williams (avg)',
                    data: tocBWAvg,
                    pointRadius: 5,
                    borderColor: tocColors[3],
                    backgroundColor: tocColors[3] + '33',
                },
                {
                    label: 'TOC Bransby Williams (eqa)',
                    data: tocBWEqa,
                    pointRadius: 5,
                    borderColor: tocColors[4],
                    backgroundColor: tocColors[4] + '33',
                    hidden: true,
                },
            ],
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: `${params[0][0]} (${params[0][1]})`,
                    },
                },
                y: {
                    title: {
                        display: true,
                        text: `${params[1][0]} (${params[1][1]})`,
                    },
                },
            },
            onClick: (event, clickedElements) => {
                if (clickedElements.length === 0) return;
                const { dataIndex, raw } = clickedElements[0].element.$context;
                const label = event.chart.data.labels[dataIndex];
                app.layers.rgToc
                    .queryFeatures({
                        where: `code = '${label}'`,
                        returnGeometry: true,
                    })
                    .then((results) => {
                        if (results.features.length) {
                            const f = results.features[0];
                            app.view.goTo(
                                { target: f.geometry, zoom: 15 },
                                { duration: 1000 }
                            );
                            app.view.openPopup({
                                features: [f],
                            });
                        }
                    });
            },
            plugins: {
                zoom: {
                    zoom: {
                        wheel: { enabled: true },
                        drag: { enabled: true, threshold: 10 },
                    },
                },
                title: {
                    display: true,
                    text: `${params[2][0]} (${params[2][1]}) by ${params[0][0]} (${params[0][1]}) x ${params[1][0]} (${params[1][1]})`,
                },
            },
        },
    });

    cc.addEventListener('dblclick', () => {
        chart.resetZoom();
    });
    return chart;
};

const toggleTocBubbleChart = (app) => {
    const chart = app.charts.tocBubbleChart;
    const lfp_len = app.charts.tocBubbleData.lfp_len;
    const sw_area = app.charts.tocBubbleData.sw_area;
    const slope_avg = app.charts.tocBubbleData.slope_avg;
    const params = app.charts.tocBubbleData.params;
    let mode = app.charts.tocBubbleData.mode;
    // Change mode between 0,1,2
    mode = mode + 1 == 4 ? 0 : mode + 1;
    app.charts.tocBubbleData.mode = mode;
    for (const ds of chart.data.datasets) {
        for (let i = 0; i < lfp_len.length; i++) {
            if (mode == 0) {
                // TOC by length x area
                chart.options.scales.x.max = null;
                ds.data[i].r = ds.data[i].y;
                ds.data[i].x = lfp_len[i][0];
                ds.data[i].y = sw_area[i][0];
                chart.options.plugins.title.text = `${params[2][0]} (${params[2][1]}) by ${params[0][0]} (${params[0][1]}) x ${params[1][0]} (${params[1][1]})`;
                chart.options.scales.x.title.text = `${params[0][0]} (${params[0][1]})`;
                chart.options.scales.y.title.text = `${params[1][0]} (${params[1][1]})`;
            } else if (mode == 1) {
                // Area by length x TOC
                ds.data[i].y = ds.data[i].r;
                ds.data[i].x = lfp_len[i][0];
                ds.data[i].r = sw_area[i][1];
                chart.options.plugins.title.text = `${params[1][0]} (Scaled to 5 - 50 px) by ${params[0][0]} (${params[0][1]}) x ${params[2][0]} (${params[2][1]})`;
                chart.options.scales.y.title.text = `${params[2][0]} (${params[2][1]})`;
            } else if (mode == 2){
                // Length by area x TOC
                ds.data[i].x = sw_area[i][0];
                ds.data[i].r = lfp_len[i][1];
                chart.options.plugins.title.text = `${params[0][0]} (Scaled to 5 - 50 px) by ${params[0][0]} (${params[1][1]}) x ${params[2][0]} (${params[2][1]})`;
                chart.options.scales.x.title.text = `${params[1][0]} (${params[1][1]})`;
            } else {
                // Length by slope x TOC
                ds.data[i].x = slope_avg[i];
                ds.data[i].r = lfp_len[i][1];
                chart.options.plugins.title.text = `${params[0][0]} (Scaled to 5 - 50 px) by ${params[3][0]} (${params[3][1]}) x ${params[2][0]} (${params[2][1]})`;
                chart.options.scales.x.title.text = `${params[3][0]} (${params[3][1]})`;
                chart.options.scales.x.max = 50;
            }
        }
    }
    chart.update(0);
};
