const i=e=>{e.ui.headerContainer=document.getElementById("headerContainer");const t=e.colorTemplateLabel=="dark"?'style="filter: grayscale(100%)"':"";e.ui.headerContainer.innerHTML=`
        <a href="https://qitplus.com"><img src="./img/qit-plus-logo.png" height="50px" width="73px" alt="qit-plus-logo" title="QIT Plus" id="logo" ${t} /></a>
        <h1 id="title">
            Dashboards powered by QIT Plus
        </h1>
        `,e.ui.dashboardsMainContainer.prepend(e.ui.headerContainer)};export{i as addHeader};
