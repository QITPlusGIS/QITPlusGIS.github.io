export const addTitle = (title) => {
    document.title = title;
};
export const addTitleDiv = (title, logoUrl) => {
    // Site heading with logo and title
    const titleDiv = document.createElement('div');
    if (!logoUrl) logoUrl = getQITPlusLogo();
    titleDiv.id = 'titleDiv';
    titleDiv.innerHTML = `
        <h1 id="title">
            <img
                src="${logoUrl}"
                alt="qit-plus-logo"
                id="logo"
            />
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

const getQITPlusLogo = () => {
    // Using QIT Plus logo
    return "data:image/png;base64,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"
};
