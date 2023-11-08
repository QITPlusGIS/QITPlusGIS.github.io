const t=e=>{e.ui.headerContainer=document.createElement("div"),e.ui.headerContainer.id="headerContainer";const i=e.colorTemplateLabel=="dark"?'style="filter: grayscale(100%)"':"";e.ui.headerContainer.innerHTML=`
        <a href="https://qitplus.com"><img src="./img/qit-plus-logo.png" height="50px" width="73px" alt="qit-plus-logo" title="QIT Plus" id="logo" ${i} /></a>
        <h1 id="title">
            Dashboards powered by QIT Plus
        </h1>
        `,e.ui.dashboardsMainContainer.prepend(e.ui.headerContainer)};export{t as addHeader};
