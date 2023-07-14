/*
* Tracking of map / view events into eView panel
*/

export const addEView = (app, reactiveUtils) => {
    const view = app.view;
    const outputMessages = document.getElementById('eViewDiv');

    // This will execute if the promise is rejected
    const errorHandler = error => {
        if (error.name && error.message) {
            const info = `<span style=" color: red;"> ${error.name} ${error.message} </span>`;
        } else {
            const info = `<span style=" color: red;"> ${error} </span>`;
        }
        displayMessage(info);
    };

    view.when(() => {
        // This will execute once the promise is resolved
        displayMessage(`<span> view.when </span> --- view loaded successfully`);
    }).catch(errorHandler);

    // Listen to layer change events on all of map's layers
    // Only listening to layer added event in this case.
    view.map.allLayers.on('change', (event) => {
        // change event fires after an item has been added, moved or removed from the collection.
        // event.moved - an array of moved layers
        // event.removed - an array of removed layers
        // event.added returns an array of added layers
        if (event.added.length > 0) {
            event.added.forEach((layer) => {
                const info = `<span> layer added: </span> ${layer.id} - ${layer.title}`;
                displayMessage(info);
            });
        }
    });

    // Listen to layerview create event for the layers
    view.on('layerview-create', (event) => {
        const info = `<span> layer created: </span> ${event.layer.id} - ${event.layer.title} is ${event.layer.loadStatus}`;
        displayMessage(info);
    });

    // Listen to basemap change
    reactiveUtils.watch(
        () => view.map.basemap,
        (basemap) => {
            const info = `<span> Basemap changed: </span> ${basemap.id}`;
            displayMessage(info);
        }
    );

    // Listen the view's click event.
    view.on('click', (event) => {
        const info = `<span> click: </span>
            x: ${event.mapPoint.x.toFixed(2)}
            y: ${event.mapPoint.y.toFixed(2)}
            long: ${event.mapPoint.longitude.toFixed(6)}
            lat: ${event.mapPoint.latitude.toFixed(6)}`;
        displayMessage(info);
    });

    // Watch view's stationary property for becoming true.
    reactiveUtils.when(
        () => view.stationary === true,
        () => {
            // Get the center of the view
            if (view.center) {
                const info = `<span> center: </span>
                    x: ${view.center.x.toFixed(2)}
                    y: ${view.center.y.toFixed(2)}
                    long: ${view.center.longitude.toFixed(6)}
                    lat: ${view.center.latitude.toFixed(6)}`;
                displayMessage(info);
            }
            // Get the extent of the view
            if (view.extent) {
                const info = `<span> extent: </span>
                    xmin: ${view.extent.xmin.toFixed(2)}
                    xmax: ${view.extent.xmax.toFixed(2)}
                    ymin: ${view.extent.ymin.toFixed(2)}
                    ymax: ${view.extent.ymax.toFixed(2)}`;
                displayMessage(info);
            }
            // Get the zoom / scale of the view
            if (view.zoom && view.scale) {
                const info = `<span> zoom/scale: </span>
                    zoom: ${view.zoom.toFixed(2)}
                    scale: ${view.scale.toFixed(2)}`;
                displayMessage(info);
            }
        }
    );

    // Watch popup's visible property to determine when the popup is
    // visible or not visible.
    reactiveUtils.watch(
        () => view.popup.visible,
        () => {
            const info = `<span> popup: </span> = ${view.popup.visible}`;
            displayMessage(info);
        }
    );

    // Add message prefixed by Local time
    const displayMessage = info => {
        outputMessages.innerHTML +=
            '<br>' + new Date().toLocaleTimeString() + ': ' + info;
        outputMessages.scrollTop = outputMessages.scrollHeight;
    };

    
}
