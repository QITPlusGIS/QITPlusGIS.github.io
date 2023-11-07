const i=e=>{e.ui.headerContainer=document.createElement("div"),e.ui.headerContainer.id="headerContainer",e.ui.headerContainer.innerHTML=`
        <a href="https://qitplus.com"><img src="./img/qit-plus-logo.png" alt="qit-plus-logo" title="QIT Plus" id="logo" /></a>
        <h1 id="title">
            Dashboards powered by QIT Plus
        </h1>
        </div>
        `,e.ui.dashboardsMainContainer.prepend(e.ui.headerContainer)};export{i as addHeader};
