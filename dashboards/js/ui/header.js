export const addHeader = (app) => {
    app.ui.headerContainer = document.createElement('div');
    app.ui.headerContainer.id = 'headerContainer';
    const filter =
        app.colorTemplateLabel == 'dark'
            ? 'style="filter: grayscale(100%)"'
            : '';
    app.ui.headerContainer.innerHTML = `
        <a href="https://qitplus.com"><img src="./img/qit-plus-logo.png" height="50px" width="73px" alt="qit-plus-logo" title="QIT Plus" id="logo" ${filter} /></a>
        <h1 id="title">
            Dashboards powered by QIT Plus
        </h1>
        `;
    app.ui.dashboardsMainContainer.prepend(app.ui.headerContainer);
};
