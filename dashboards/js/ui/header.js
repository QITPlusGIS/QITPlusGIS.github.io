export const addHeader = (app) => {
    app.ui.headerContainer = document.createElement('div');
    app.ui.headerContainer.id = 'headerContainer';
    app.ui.headerContainer.innerHTML = `
        <a href="https://qitplus.com"><img src="./img/qit-plus-logo.png" alt="qit-plus-logo" title="QIT Plus" class="logo" /></a>
        <h1 id="title">
            Dashboards powered by QIT Plus
        </h1>
        </div>
        `;
    app.ui.dashboardsMainContainer.prepend(app.ui.headerContainer);
}