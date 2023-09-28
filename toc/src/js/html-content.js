export const addTitle = (title) => {
    document.title = title;
};
export const addTitleDiv = (title, defaultLogo, logo) => {
    // Site heading with logo and title
    const titleDiv = document.createElement('div');
    if (!logo) logo = defaultLogo;
    titleDiv.id = 'titleDiv';
    titleDiv.innerHTML = `
        <h1 id="title">
            <img src="${logo}" alt="" id="logo" />
            ${title}
        </h1>
    `;
    document.body.appendChild(titleDiv);
};
export const addMenu = () => {
    const titleDiv = document.getElementById('titleDiv');
    const menuButtonDiv = document.createElement('div');
    menuButtonDiv.id = 'menuButtonDiv';
    menuButtonDiv.innerHTML = `<button id="menuButton"><span id="menuButtonText">Menu</span> <calcite-icon icon="hamburger" text-label="Menu"></button>`;
    titleDiv.appendChild(menuButtonDiv);

    const menuItemsContainer = document.createElement('div');
    menuItemsContainer.id = 'menuItemsContainer';
    menuItemsContainer.innerHTML = '<div id="menuItemsContent"></div>';
    document.body.appendChild(menuItemsContainer);

    const menuLinks = [
        {
          "id": "gold-coast-city",
          "href": "?lga=gold-coast-city",
          "text": "Gold Coast City"
        },
        {
          "id": "somerset-regional",
          "href": "?lga=somerset-regional",
          "text": "Somerset Regional"
        },
        {
            "id": "scenic-rim-regional",
            "href": "?lga=scenic-rim-regional",
            "text": "Scenic Rim Regional"
          },
      ];
    let menu = '<button id="closeMenuButton" class="closeButton"><calcite-icon icon="x" text-label="Close"></button><ul>';
    for (const ml of menuLinks) {
        menu += `<li><a id="${ml.id}" href="${ml.href}">${ml.text}</a></li>`;
    }
    menu += '</ul>';
    const toggleMenu = () => {
        const menu = document.getElementById('menuItemsContainer').classList.toggle('active');
    }
    document.getElementById('menuItemsContent').innerHTML = menu;
    document.getElementById('menuButton').onclick = () => { toggleMenu() };
    document.getElementById('closeMenuButton').onclick = () => { toggleMenu() };    

}

export const addViewDiv = () => {
    // Main map placeholder
    const viewDiv = document.createElement('div');
    viewDiv.id = 'viewDiv';
    document.body.appendChild(viewDiv);
};
export const addLoaderDiv = () => {
    // Loader animation
    const loader = document.createElement('div');
    loader.id = 'loader';
    loader.innerHTML = `
        <div class="loader-inner">
            <div class="loader-line-wrap">
                <div class="loader-line"></div>
            </div>
            <div class="loader-line-wrap">
                <div class="loader-line"></div>
            </div>
            <div class="loader-line-wrap">
                <div class="loader-line"></div>
            </div>
            <div class="loader-line-wrap">
                <div class="loader-line"></div>
            </div>
            <div class="loader-line-wrap">
                <div class="loader-line"></div>
            </div>
        </div>
    `;
    document.body.appendChild(loader);
};
