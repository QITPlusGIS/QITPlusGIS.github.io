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
