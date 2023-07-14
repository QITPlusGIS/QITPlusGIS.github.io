/*
 * Bottom container to hold various tabs - table / chart / eView
 */

export const addBottomContainer = () => {
    // Create bottom container
    const bottomContainer = document.createElement('div');

    // Adjustable height
    bottomContainer.id = 'bottomContainer';
    bottomContainer.className = 'collapsed';
    // Add placeholders for Table, Chart and event View
    bottomContainer.innerHTML = `
        <div id="tableDivToggle" class="active esri-widget--button">Table</div>
        <div id="chartDivToggle" class="esri-widget--button">Chart</div>
        <div id="eViewDivToggle" class="esri-widget--button">eView</div>
        <div id="bcDivToggle" class="esri-widget--button">&#8613;</div>
        <div id="bcDivResize" class="esri-widget--button">&#8597;</div>
        <div id="tableDiv"></div>
        <div id="chartDiv" class="hidden">
            <div id="tocLineChartDivToggle" class="active esri-widget--button">Line</div>
            <div id="tocBubbleChartDivToggle" class="esri-widget--button">Bubble</div>
            <div id="tocLineChartDiv">
                <canvas id="tocLineChartCanvas"></canvas>
            </div>
            <div id="tocBubbleChartDiv" class="hidden">
                <div id="tocBubbleChartToggle" class="esri-widget--button"><calcite-icon icon="round-about-right" text-label="Toggle chart"></calcite-icon></div>
                <canvas id="tocBubbleChartCanvas"></canvas>
            </div>
        </div>
        <div id="eViewDiv" class="hidden">View events log:</div>`;

    // Add toggles
    document.body.appendChild(bottomContainer);
    const tableToggle = document.getElementById('tableDivToggle');
    const chartToggle = document.getElementById('chartDivToggle');
    const eViewToggle = document.getElementById('eViewDivToggle');
    const bcToggle = document.getElementById('bcDivToggle');
    const bcResize = document.getElementById('bcDivResize');
    const tocLineChartDivToggle = document.getElementById('tocLineChartDivToggle');
    const tocBubbleChartDivToggle = document.getElementById(
        'tocBubbleChartDivToggle'
    );
    tableToggle.addEventListener('click', () =>
        toggleBContainer(true, 'tableDiv')
    );
    chartToggle.addEventListener('click', () =>
        toggleBContainer(true, 'chartDiv')
    );
    eViewToggle.addEventListener('click', () =>
        toggleBContainer(true, 'eViewDiv')
    );
    bcToggle.addEventListener('click', () => toggleBContainer());
    tocLineChartDivToggle.addEventListener('click', () =>
        toggleChart('tocLineChartDiv')
    );
    tocBubbleChartDivToggle.addEventListener('click', () =>
        toggleChart('tocBubbleChartDiv')
    );

    // Toggle bottom container and tab content
    const toggleBContainer = (openContainer = false, activateDiv = '') => {
        if (
            !openContainer ||
            (openContainer && bottomContainer.classList.contains('collapsed'))
        ) {
            const collapsed = bottomContainer.classList.toggle('collapsed');
            bcToggle.innerHTML = collapsed ? '&#8613;' : '&#10515;';
            bcResize.style.visibility = collapsed ? 'hidden' : 'visible';
        }
        // Show/Hide tabs
        if (activateDiv) {
            let tabs = ['tableDiv', 'chartDiv', 'eViewDiv'];
            if (tabs.includes(activateDiv)) {
                let el = document.getElementById(activateDiv);
                if (el.classList.contains('hidden')) {
                    el.classList.remove('hidden');
                    el = document.getElementById(activateDiv + 'Toggle');
                    el.classList.add('active');
                    tabs = tabs.filter((item) => item !== activateDiv);
                    for (const tab of tabs) {
                        el = document.getElementById(tab);
                        el.classList.add('hidden');
                        el = document.getElementById(tab + 'Toggle');
                        el.classList.remove('active');
                    }
                }
            }
        }
    };

    // Resizing bottom  container
    let movePosition;
    bcResize.addEventListener(
        'mousedown',
        (e) => {
            movePosition = e.y;
            document.addEventListener('mousemove', resizeBContainer, false);
        },
        false
    );
    document.addEventListener(
        'mouseup',
        () => {
            document.removeEventListener('mousemove', resizeBContainer, false);
        },
        false
    );
    const resizeBContainer = (e) => {
        const dy = movePosition - e.y;
        movePosition = e.y;
        bottomContainer.style.height =
            parseInt(getComputedStyle(bottomContainer, '').height) + dy + 'px';
    };

    // Toggle Line and bubble chart
    const toggleChart = (activateChart='') => {
        if (activateChart){
            let tabs = ['tocLineChartDiv', 'tocBubbleChartDiv'];
            if (tabs.includes(activateChart)) {
                let el = document.getElementById(activateChart);
                if (el.classList.contains('hidden')) {
                    el.classList.remove('hidden');
                    el = document.getElementById(activateChart + 'Toggle');
                    el.classList.add('active');
                    tabs = tabs.filter((item) => item !== activateChart);
                    for (const tab of tabs) {
                        el = document.getElementById(tab);
                        el.classList.add('hidden');
                        el = document.getElementById(tab + 'Toggle');
                        el.classList.remove('active');
                    }
                }
            }
        }
    }
};
