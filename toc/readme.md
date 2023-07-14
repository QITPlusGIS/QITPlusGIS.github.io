# QIT Plus - Time of Concentration

**Important: All texts and code are intelectual property of QIT Plus and can't be used without QIT Plus written permission.**

The **map interface** is available at [QIT Plus - Time of Concentration](https://qitplusgis.github.io/toc).

**Time of concentration** is a concept used in hydrology to measure the response of a watershed to a rain event. It is defined as the time needed for water to flow from the most remote point in a watershed to the watershed outlet. It is a function of the topography, geology, and land use within the watershed. A number of methods can be used to calculate time of concentration.

Time of concentration is useful in predicting flow rates that would result from hypothetical storms, which are based on statistically derived return periods through **IDF curves**.

This project compares 3 methods with existing values provided by JBP to allow QIT Plus generate it's own values when needed.

- [Methods used](#methods-used)
- [Process to implement methods](#process-to-implement-methods)
- [Presenting results](#presenting-results)
- [Map functionalities](#map-functionalities)
- [Development - Technical Setup](#development---technical-setup)



## Methods used
1. **Kirpich** - The Kirpich Formula is used to estimate the time of concentration used in surface runoff design. The Kirpich equation was developed in 1940 from a study of 7 small (1.25 acres – 112 acres) rural catchments in Tennessee with well-defined channels and steep slopes (3%-10%).
2. **Pilgrim McDermott** - McDermott and Pilgrim (1982) needed a formula for the time of concentration to develop their probabilistic rational method approach which was ultimately adopted in ARR1987.  They make the point that, for their statistical method, it is not necessary that the time of concentration closely matches the time for water to traverse a catchment, rather a characteristic time is required for a catchment to determine the duration of the design rainfall.  This characteristic time must be able to be determined directly by designers and lead to consistent values of the runoff coefficient and design flood values. This formula is a component of the Probabilistic Rational Method as discussed in Australian Rainfall and Runoff 1987 (ARR1987) Book IV and is recommended for use in:
    - Eastern New South Wales
    - Victoria (as developed by Adams, 1987)
    - Western Australia - wheatbelt region
3. **Bransby Williams** - The Bransby Williams formula for the time of concentration dates from 1922 when George Bransby Williams published a paper “Flood discharge and dimensions of spillways in India“.  This refers back to an earlier paper by “Mr Chamier” who noted the quote below. Bransby Williams provides a formula for this “time taken…”, what we would now call the time of concentration. 

    >The maximum flood will generally be produced by the greatest possible rainfall of a duration corresponding to the… time taken for the water to reach the point of discharge from the most distance point of the watershed.
  
## Process to implement methods
Preferred tool to implement methods was [ArcGIS Pro](https://pro.arcgis.com/). It did very good job at starting steps of processing **Digital Elevation Model** needed as core dataset. But it ended up with extremely complicated inefficient way with no geo-processing tools (including scripts) available for extracting the **Longest Flow Path** needed as input for TOC methods, making this tool hardly usable for scalable automated process.

Some time was spent with [SAGA](https://saga-gis.sourceforge.io/) which provides extensive automated geoscientific analysis tools including hydrology, and does provide python wrapping around tools to relatively seamlessly **integrate into ArcGIS Pro** as toolbox. But the most efficient way to automate process turned out to be using [QGIS](https://qgis.org/) in combination with [GRASS GIS](https://grass.osgeo.org/).

QGIS similarly as ArcGIS Pro excel at gis datasets and layers handling and provides large number of GIS analysis tools. It was used for handling initial DEM datasets, stitching together [The Digital Elevation Model (DEM) 5 Metre Grid of Australia](https://pid.geoscience.gov.au/dataset/ga/89644) with [SRTM-derived 1 Second Digital Elevation Model](https://pid.geoscience.gov.au/dataset/ga/72759) to cover whole evaluation area (high resolution [DEM coverage](https://elevation.fsdf.org.au/) is still sparse across QLD). From there GRASS was used to generate sub-watershed areas, importantly longest flow paths and all other calculations for rainfall gauges extracted from [Guardian IMS](https://live.guardianims.com/) for about 115 test sites, with about 50 TOC values provided by [JBP](https://jbpacific.com.au/).

### DEM to Drainage Direction and Flow Accumulation
After pre-processing DEM to cover whole test area (watersheds) in QGIS the Drainage Direction and Flow Accumulation was calculated using [r.watershed](https://grass.osgeo.org/grass82/manuals/r.watershed.html).

The following is done via python script (provided in grass/toc.py) which does all the rest required to calculate values for TOC methods. It is to be run from within GRASS simple Python editor.

## Presenting results
Early in the process it was identified that generating PDFs with over 100 maps (one for each Gauge site) to analyse and discuss results is extremely cumbersome. Taking into account QIT Plus wants to start using ArcGIS JS for online map interface such example interface was built for this project.

### Map interface
Map interface was built on [**ArcGIS JS**](https://developers.arcgis.com/javascript/latest/) using modular approach - [ArcGIS JS - ES modules](https://developers.arcgis.com/javascript/latest/es-modules/) as the currently best standardized module system for working with JavaScript and ArcGIS JS.

The **map interface** is available at [QIT Plus - Time of Concentration](https://qitplusgis.github.io/toc).

## Map functionalities

### Top left widgets
- **Zoom in/out** - zoom in/out, also possible with mouse roller on map or pinch on mobile 
- **Compass** - shows map orientation to North, click to default, right click and drag on map to rotate
- **Basemap toggle** - toggle basemap between Topography and Satellite (applied filters on satellite to make it washed-out - not interfere too much with overlay layers)
- **Search** - search gauge by code or name, zoom to it and open it's  information popup
- **Layer list** - toggle layers visibility
- **Legend** - show legend for layers
- **Elevation profile** - show line elevation profile for selected or custom new line (automatically opens when *Show subwatershed* action clicked for relevant longest flow path)
- **Zoom to all gauges** - zoom to extent of rainfall gauges

### Bottom container
Bottom container was coded to be expandable/collapsible and vertically resizable using buttons on right.

Tabs of bottom container:

- **Table** - show gauges tabular data, allows sorting, drag and show/hide columns of interest (can be also used for editing data when signed in to AGOL and working with editable layer)
- **Chart** - line chart, bubble chart (with 4 rotating modes to swap  for scales and size of bubbles using *Rotate* button positioned under *Bubble* button.). 
    - Objects in chart are interactive with hover effect tooltip, and click takes you in map to relevant gauge and opens popup for more details.
    - Mouse down drag to zoom into detail in chart
    - Mouse double click to zoom to default extent
- **eView** - watching various map/view events for easier development adjustments

### Gauge popup
- **Show subwatershed** - show the subwatershed for the selected gauge (gauge being outlet) including the longest flow path and it's elevation profile. This action is not available if the gauge was excluded from calculations - e.g. location directly on the ridge.
- **Zoom to** - zoom to gauge location

## Development - Technical Setup
All source files required for this project are located in src directory. The project uses [ES modules](https://developers.arcgis.com/javascript/latest/es-modules/) approach and as such you need to have some tool supporting it. Esri does recommend Vite for development with ArcGIS JS, especially for functionalities like very easy setup, hot reload and bundling the modules.

[**Vite**](https://vitejs.dev/) is a local development server written by Evan You (the creator of Vue.js) and used by default by Vue and for React project templates. It has support for TypeScript and JSX. Some core functionalities:

**Instant Server Start** - On demand file serving over native ESM, no bundling required!

**Optimized Build** - Pre-configured Rollup build with multi-page and library mode support.

#### Prerequisites 
[**Node.js**](https://nodejs.org/) is a cross-platform, open-source server environment which includes **npm**

**npm** - npm is a package manager for the JavaScript programming language maintained by npm, Inc.

#### Setup
1. Install Node.js
2. Create your working directory for Vite e.g. `c:\www\vite`
3. Open command line / PowerShell in the folder and type `npm` to check you have it available (might need restart after Node.js install)
4. Install Vite by typing `npm i vite`
5. Initialise new Vite project `npm init vite`
    - Need to install... `y`
    - Project name: `your-project-name`
    - Select a framework: `Vanilla` (no framework unless you want some from list)
    - Select a variant `JavaScript` (unless you want to use TypeScript)
6. Run following commands:
    - `cd your-project-name`
    - `npm install`
7. ArcGIS JS and other packages
    - Add ArcGIS JS (ArcGIS Maps SDK for JavaScript) by running command `npm i @arcgis/core`
    - Add Chart.js `npm i chart.js`
    - Add pan/zoom plugin for charts `npm install chartjs-plugin-zoom`
8. Copy the src folder of this repository into the folder (including simple config file for Vite - vite.config.js)
9. Run following command: `npm run dev`
10. Vite server should start, providing you a link - e.g. Local: http://localhost:5173/ - click the link / copy address to your browser to check it works. All done!
