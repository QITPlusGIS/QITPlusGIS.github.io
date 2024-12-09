import { viewDefinitionBrisbane, qldImageryAllUsers } from './config.js';

require([
    'esri/Map',
    'esri/views/MapView',
    'esri/layers/ImageryTileLayer',
    'esri/layers/GeoJSONLayer',
], (Map, MapView, ImageryTileLayer, GeoJSONLayer) =>
    (async () => {
        const currentUrl = window.location.href;

        const map = new Map({});

        viewDefinitionBrisbane.map = map;
        const view = new MapView(viewDefinitionBrisbane);

        const qldImageryTileLayer = new ImageryTileLayer(qldImageryAllUsers);
        map.add(qldImageryTileLayer);

        const geojsonLayer = new GeoJSONLayer({
            url: './photos.geojson',
            popupTemplate: {
                title: 'Image Details',
                content: `
                    <p><strong>Date/Time:</strong> {datetime}</p>
                    <p><a href="${currentUrl}{image}" target="_blank"><img src="${currentUrl}{image}" alt="Photo" style="max-width: 400px;" /></a></p>
                `,
            },
            effect: 'drop-shadow(0px, 0px, 10px)',
        });

        function createCircularThumbnail(url, size, borderColor, borderWidth) {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.crossOrigin = 'Anonymous';
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');

                    canvas.width = size + 2 * borderWidth;
                    canvas.height = size + 2 * borderWidth;

                    ctx.fillStyle = borderColor;
                    ctx.beginPath();
                    ctx.arc(
                        canvas.width / 2,
                        canvas.height / 2,
                        size / 2 + borderWidth,
                        0,
                        2 * Math.PI
                    );
                    ctx.fill();

                    ctx.beginPath();
                    ctx.arc(
                        canvas.width / 2,
                        canvas.height / 2,
                        size / 2,
                        0,
                        2 * Math.PI
                    );
                    ctx.clip();

                    ctx.drawImage(img, borderWidth, borderWidth, size, size);

                    resolve(canvas.toDataURL());
                };
                img.onerror = reject;
                img.src = url;
            });
        }

        fetch('./photos.geojson')
            .then((response) => response.json())
            .then(async (geojson) => {
                const uniqueValueInfos = [];

                for (const feature of geojson.features) {
                    const thumbnail = feature.properties.thumbnail;
                    if (thumbnail) {
                        const fullUrl = `${currentUrl}${thumbnail}`;
                        try {
                            const circularThumbnail =
                                await createCircularThumbnail(
                                    fullUrl,
                                    50,
                                    'white',
                                    5
                                );
                            uniqueValueInfos.push({
                                value: thumbnail,
                                symbol: {
                                    type: 'picture-marker',
                                    url: circularThumbnail,
                                    width: '50px',
                                    height: '50px',
                                },
                            });
                        } catch (error) {
                            console.error(
                                `Error creating circular thumbnail for ${thumbnail}:`,
                                error
                            );
                        }
                    }
                }

                geojsonLayer.renderer = {
                    type: 'unique-value',
                    field: 'thumbnail',
                    defaultSymbol: {
                        type: 'simple-marker',
                        style: 'circle',
                        color: 'white',
                        size: '30px',
                    },
                    uniqueValueInfos: uniqueValueInfos,
                };

                map.add(geojsonLayer);
                geojsonLayer.when(() => {
                    geojsonLayer.queryExtent().then((result) => {
                        if (result.extent && view.ready) {
                            view.goTo(result.extent.expand(1.2)).catch((error) => {
                                console.error('Error while zooming to extent:', error);
                            });
                        }
                    }).catch((error) => {
                        console.error('Error querying layer extent:', error);
                    });
                }).catch((error) => {
                    console.error('Error loading GeoJSONLayer:', error);
                });
            })
            .catch((error) => {
                console.error('Error fetching GeoJSON:', error);
            });
    })());
