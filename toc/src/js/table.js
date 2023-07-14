/*
* Table to analyse Time of Concentration methodologies
*/

export const addTableView = (app, arcgis) => {
    // Create new table
    app.featureTable = new arcgis.FeatureTable({
        lable: 'Time of concentration',
        view: app.view,
        multiSortEnabled: true,
        layer: app.layers.rgToc,
        container: document.getElementById("tableDiv"),
        tableTemplate: new arcgis.TableTemplate({
            columnTemplates: [
                {
                    type: "field",
                    fieldName: "code",
                    label: "Code",
                    direction: "asc"
                },
                {
                    type: "field",
                    fieldName: "name",
                    label: "Name"
                },
                {
                    type: "field",
                    fieldName: "catchment",
                    label: "Catchment",
                    visible: false
                },
                {
                    type: "field",
                    fieldName: "sw_area",
                    label: "Subwatershed area",
                    visible: false
                },
                {
                    type: "field",
                    fieldName: "lfp_len",
                    label: "LFP length",
                    visible: false
                },
                {
                    type: "field",
                    fieldName: "lfp_dem_min",
                    label: "LFP outlet elevation",
                    visible: false
                },
                {
                    type: "field",
                    fieldName: "lfp_dem_max",
                    label: "LFP top elevation",
                    visible: false
                },
                {
                    type: "field",
                    fieldName: "lfp_dem_slope_avg",
                    label: "Average slope",
                    visible: false
                },
                {
                    type: "field",
                    fieldName: "lfp_dem_slope_eqa",
                    label: "Equal area slope",
                    visible: false
                },
                {
                    type: "field",
                    fieldName: "toc_jbp",
                    label: "TOC JBP"
                },
                {
                    type: "field",
                    fieldName: "toc_kir",
                    label: "TOC Kirpich"
                },
                {
                    type: "field",
                    fieldName: "toc_pil",
                    label: "TOC Pilgrim McDermott"
                },
                {
                    type: "field",
                    fieldName: "toc_bw_avg",
                    label: "TOC Bransby Williams (avg)"
                },
                {
                    type: "field",
                    fieldName: "toc_bw_eqa",
                    label: "TOC Bransby Williams (eqa)"
                }]
        }),
        visibleElements: {
            header: true,
            menu: true,
            menuItems: {
                clearSelection: false,
                refreshData: false,
                toggleColumns: true,
                selectedRecordsShowAllToggle: false,
                selectedRecordsShowSelectedToggle: false,
                zoomToSelection: false
            },
            selectionColumn: false,
            columnMenus: false
        }
    });


    /*
        Interactions of feature table - selection and popup
        The below code was abandoned and selecting features was turned off for this table
    */

    // const clearSelectionDiv = document.createElement('div');
    // clearSelectionDiv.id = 'clear-selection'
    // clearSelectionDiv.className = 'esri-widget esri-widget--button esri-widget esri-interactiver';
    // clearSelectionDiv.title = 'Clear selection';
    // clearSelectionDiv.innerHTML = '<span class="esri-icon-erase"></span>';
    // document.body.appendChild(clearSelectionDiv);

    // // add the clear selection button the view
    // view.ui.add("clear-selection", "top-left");
    // document.getElementById("clear-selection").addEventListener("click", () => {
    //     featureTable.filterGeometry = null;
    //     featureTable.highlightIds.removeAll();
    //     featureTable.clearSelectionFilter();
    // });

    // featureTable.highlightIds.on("change", (event) => {
    //     console.log("features selected", event.added);
    //     console.log("features deselected", event.removed);
    //     if (event.added.length) {
    //         if (view.popup.visible) {
    //             view.closePopup();
    //         }
    //         view.openPopup();
    //     }
    //     featureTable.zoomToSelection();
    // });

    // Watch for the popup's visible property
    // reactiveUtils.watch(
    //     () => view.popup.viewModel?.active,
    //     () => {
    //         const selectedFeature = view.popup.selectedFeature;
    //         if (selectedFeature !== null && view.popup.visible !== false) {
    //             featureTable.highlightIds.removeAll();
    //             featureTable.highlightIds.push(
    //                 0,1,2,3
    //             );
    //         }
    //     }
    // );
}
