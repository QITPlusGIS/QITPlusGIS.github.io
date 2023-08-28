/*
 * Main app object to reference other objects/functions/variables
 * to share between modules and simplify access
 * with some general ui functions e.g. loader animation controller
 */

export const App = () => {
    // Default color scheme for TOC methodologies
    const tocColors = ['#311802', '#924907', '#f48420', '#f8af6d', '#fde4ce'];

    // Default view center and zoom level
    const defaultView = { center: [153, -28], zoom: 11 };

    // Loader
    const loader = document.getElementById('loader');
    const startLoader = () => {
        loader.classList.remove('hidden');
    };
    const stopLoader = () => {
        loader.classList.add('hidden');
    };

    return {
        tocColors,
        defaultView,
        startLoader,
        stopLoader,
    };
};
