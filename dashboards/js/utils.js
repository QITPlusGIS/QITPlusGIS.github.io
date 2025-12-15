import { colorTemplates } from './ui/colorTemplates';

// Arcgis Icons
import {
    home24,
    information24,
    dashboard24,
    checkShield24,
    circleDisallowed24,
} from '@esri/calcite-ui-icons';

export const rgbToRgba = (rgb, a) => {
    const rgba = rgb.replace('rgb', 'rgba').replace(')', `,${a})`);
    return rgba;
};

export const resetSearchPanel = (app) => {
    if (app.showSearchPanel){
        app.ui.searchPanelContent.innerHTML = '';
        app.ui.searchPanelContent.appendChild(app.dashboardsList);
    }
}

export const zoomToQueryLayer = (app, layer, query) => {
    layer.queryExtent({ where: query }).then((result) => {
        app.mapView.goTo(
            { target: result.extent.expand(1.1) },
            { duration: 1000 }
        );
    });
};

export const adjustAppByURLParams = (app) => {
    const urlParams = new URLSearchParams(document.location.search);
    if (urlParams.has('sh')) app.showHeader = Number(urlParams.get('sh')) ? true : false;
    if (urlParams.has('ssp')) app.showSearchPanel = Number(urlParams.get('ssp')) ? true : false;
    if (urlParams.has('sf')) app.showFlow = Number(urlParams.get('sf')) ? true : false;
    if (urlParams.has('sg')) app.showHasGuardian = Number(urlParams.get('sg')) ? true : false;
    if (urlParams.has('le')) app.layerEffect = Number(urlParams.get('le')) ? true : false;
    app.colorTemplate = colorTemplates[app.colorTemplateLabel];
    if (urlParams.has('ct')){
        const ct = urlParams.get('ct');
        if (colorTemplates.hasOwnProperty(ct)){
            app.colorTemplateLabel = ct;
            app.colorTemplate = colorTemplates[ct];
        }
    }
}

export const addIcons = (app) => {
    const iconInfos = {
        home: ['Default extent', home24],
        info: ['Information', information24],
        dash: ['Dashboard', dashboard24],
        shield: ['Guardian IMS', checkShield24],
        na: ['NA', circleDisallowed24],
    };
    for (const key in iconInfos){
        app.ui.icons[key] = `<svg xmlns="http://www.w3.org/2000/svg"><title>${iconInfos[key][0]}</title><path d="${iconInfos[key][1]}" /></svg>`;
    }
}

// Set CSS style based on obtained parameters
export const setCss = (colors) => {
    for (const [key, value] of Object.entries(colors)) {
        document.documentElement.style.setProperty(`--${key}`, value);
    }
};

export const showResultInfo = (app, attributes) => {
    const dashUrl = attributes.dash_url;
    const name = `${attributes.name}, ${attributes.state}`;
    const hasIMS = attributes.g_ims;
    
    if (app.showSearchPanel) {
        app.ui.searchPanelContent.innerHTML = '';
        const infoList = document.createElement('ul');
        const nameItem = document.createElement('li');
        nameItem.innerHTML = `<h3>${name}</h3>`;
        infoList.appendChild(nameItem);
        const dashItem = document.createElement('li');
        if (dashUrl) {
            dashItem.innerHTML = `<a href="${dashUrl}" target="_blank">${app.ui.icons.dash}</a> <a href="${dashUrl}" target="_blank">Dashboard</a>`;
        } else {
            dashItem.innerHTML = `${app.ui.icons.na} No dashboard available`;
        }
        infoList.appendChild(dashItem);
        const imsItem = document.createElement('li');
        if (hasIMS){
            imsItem.innerHTML = `${app.ui.icons.shield} Has Guardian IMS`;
        } else {
            imsItem.innerHTML = `${app.ui.icons.na} No Guardian IMS`;
        }
        infoList.appendChild(imsItem);
        app.ui.searchPanelContent.appendChild(infoList);
    } else {
        if (dashUrl) window.open(dashUrl, '_blank');
    }
}