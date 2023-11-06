// Requires arcgis Search Widget
import Search from '@arcgis/core/widgets/Search';

export const addSearchPanel = (app) => {
    if (app.layers.ab) {
        app.mapView
            .when()
            .then(() => {
                return app.layers.ab.when();
            })
            .then(() => {
                addSearchPanelDiv(app);
                addSearchWidget(app);
                populateDashboardsList(app);
            });
    }
};

const addSearchPanelDiv = (app) => {
    // Create search panel
    app.ui.searchPanel = document.createElement('div');
    app.ui.searchPanel.id = 'searchPanel';
    app.ui.searchPanel.innerHTML = `
        <div id="searchContainer"></div>
        <div id="searchPanelContent"></div>
    `;
    app.ui.mapInterfaceContainer.appendChild(app.ui.searchPanel);
};

const getInfoButton = (app, f) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.innerHTML = app.ui.icons.info;
    button.addEventListener('click', () => {
        app.utils.showResultInfo(app, f.attributes);
        if (app.highlightSelect) app.highlightSelect.remove();
        app.highlightSelect = app.mainLayerView.highlight(f);
        app.mapView.goTo(
            f.geometry.extent.expand(2),
            {duration: 1000}
        );
    });
    return button;
};

const getDashboardButton = (app, url) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.innerHTML = app.ui.icons.dash;
    button.addEventListener('click', () => {
        window.open(url, '_blank');
    });
    return button;
};

const populateDashboardsList = (app) => {
    // Populate dashboard list with features
    const layer = app.layers.ab;
    const query = layer.createQuery();
    query.where = "dash_url <> '' and dash_url is not null";
    query.outFields = ['*'];
    query.orderByFields = ['name'];

    layer.queryFeatures(query).then(function (response) {
        const dashboardsList = document.createElement('ul');
        for (const f of response.features) {
            const url = f.attributes.dash_url;
            const name = f.attributes.name + ', ' + f.attributes.state;
            const infoButton = getInfoButton(app, f);
            const dashboardButton = getDashboardButton(app, url);
            const dashboardsItem = document.createElement('li');
            dashboardsItem.appendChild(infoButton);
            dashboardsItem.appendChild(dashboardButton);
            dashboardsItem.appendChild(document.createTextNode(name));
            dashboardsList.appendChild(dashboardsItem);
        }
        app.dashboardsList = dashboardsList;
        app.ui.searchPanelContent =
            document.getElementById('searchPanelContent');
        app.ui.searchPanelContent.innerHTML = '';
        app.ui.searchPanelContent.appendChild(dashboardsList);
    });
};

const addSearchWidget = (app) => {
    app.widgets.search = getSearchWidget(app);
    setSearchWidget(app);
};

const getSearchWidget = (app) => {
    // Create Search widget
    const widget = new Search({
        view: app.mapView,
        locationEnabled: false,
        searchAllEnabled: false,
        includeDefaultSources: false,
        container: 'searchContainer',
    });
    widget.goToOverride = (view, goToParams) => {
        const attributes = goToParams.target.target.attributes;        
        app.utils.showResultInfo(app, attributes);
        if (app.highlightSelect) app.highlightSelect.remove();
        app.highlightSelect = app.mainLayerView.highlight(goToParams.target.target);
        goToParams.options.duration = 1000;
        return view.goTo(
            goToParams.target.target.geometry.extent.expand(2),
            goToParams.options
        );
    };

    widget.on('select-result', (result) => {
        // if (app.highlightSelect) app.highlightSelect.remove();
        // app.highlightSelect = app.mainLayerView.highlight(result.result.feature);
        widget.clear();
    });
    return widget;
};

const setSearchWidget = (app) => {
    app.widgets.search.sources = [
        {
            layer: app.layers.ab,
            searchFields: ['name'],
            suggestionTemplate: '{name}, {state}',
            exactMatch: false,
            outFields: ['name', 'state','dash_url', 'g_ims'],
            prefix: '%',
            postfix: '%',
            name: 'LGA Name',
            placeholder: 'LGA Name',
            maxSuggestions: 6,
            minSuggestCharacters: 1,
        },
    ];
    app.widgets.search.when(()=> {
        // Focus search input only if header exists
        if (app.showHeader) app.widgets.search.focus();
    });
};
