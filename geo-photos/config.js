export const viewDefinitionQld = {
    container: 'map',
    map: 'map',
    scale: 15000000,
    center: {
        longitude: 144.1,
        latitude: -22.5,
    },
};

export const viewDefinitionBrisbane = {
    container: 'map',
    map: 'map',
    scale: 10000,
    center: {
        longitude: 153.0272,
        latitude: -27.4689,
    },
};

export const qldImageryAllUsers = {
    url: 'https://spatial-img.information.qld.gov.au/arcgis/rest/services/Basemaps/LatestStateProgram_AllUsers/ImageServer',
    effect: 'saturate(25%) contrast(50%) brightness(150%)',
};

export const qldImagerySISPUsers = {
    url: 'https://spatial-img.information.qld.gov.au/arcgis/rest/services/Basemaps/LatestStateProgram_QGovSISPUsers/ImageServer',
};
