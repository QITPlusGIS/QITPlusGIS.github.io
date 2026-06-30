# Queensland Fuel Availability Map - Leaflet Visualisation

This repository contains the Leaflet-based front-end visualisation example for displaying Queensland fuel availability data from an existing ArcGIS Online feature layer.

[QLD Fuel Stations](https://qitplusgis.github.io/qld-fuel-stations/)

The data processing and publishing pipeline is handled separately by a Python backend running on AWS Lambda. That backend is not included in this repository. This repository is intended to hold only the browser-based visualisation examples and related static assets that can be added to an existing web project.

## Purpose

The visualisation displays fuel station availability across Queensland using Leaflet, Esri Leaflet, and marker clustering. It reads directly from a public ArcGIS FeatureServer layer and uses the layer metadata to build map icons and the legend.

The example demonstrates:

- Leaflet map setup
- CARTO basemap integration
- ArcGIS FeatureServer querying
- ArcGIS renderer metadata parsing
- Feature-layer icon reuse from Esri picture marker symbols
- Clustered fuel station markers
- Donut-style cluster symbols showing availability mix
- Fuel station popups with service station details, fuel status, prices, LGA, source attribution, and Google Maps links
- Dynamic legend generation from the ArcGIS layer renderer
- Display of the ArcGIS layer last edit date as the latest information check timestamp

## Repository Scope

Included in this repository:

```text
index.html      # Example page loading Leaflet and related browser libraries
style.css       # Styling for the map and popup presentation
script.js       # Leaflet visualisation logic
README.md       # Project overview and usage notes
```

Not included in this repository:

```text
Python data processing code
AWS Lambda functions
API tokens or secrets
S3 publishing logic
ArcGIS Online publishing/update scripts
Backend deployment configuration
```

The backend is referenced only for context. It is expected to run separately and maintain the ArcGIS Online feature layer consumed by this visualisation.

## Front-End Dependencies

The example uses CDN-hosted browser libraries:

- [Leaflet](https://leafletjs.com/) `1.9.4`
- [Esri Leaflet](https://developers.arcgis.com/esri-leaflet/) `3.0.19`
- [Leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster) `1.5.3`
- CARTO light basemap tiles

No JavaScript build step is required for the standalone example.

## Data Source

The map reads fuel station data from an ArcGIS Online feature layer:

```js
const fuelLayerUrl =
  "https://services7.arcgis.com/si70weKpzPSa0BGV/arcgis/rest/services/fuel_sites_qld/FeatureServer/0";
```

The script requests:

- Layer metadata using `?f=pjson`
- Feature data using the `/query` endpoint with `where=1=1`, `outFields=*`, `returnGeometry=true`, and `outSR=4326`

The layer is expected to contain fields such as:

```text
Service_Station_Name
Outage_Type
Location
Google_Maps_URL
lga_name
E10
E10_Price
Unleaded_91
Unleaded_91_Price
Premium_95
Premium_95_Price
Premium_98
Premium_98_Price
Diesel
Diesel_Price
Premium_Diesel
Premium_Diesel_Price
E85
E85_Price
LPG
LPG_Price
AdBlue
JetA1
AvGas
```

## Expected Outage Categories

The current visualisation expects these fuel availability values:

```text
Fuel Available
Fuel Partially Available
Fuel Unavailable
Fuel Unknown
```

These values are used for:

- Marker icon selection
- Popup header colour
- Cluster donut segment colour
- Legend categories

## How It Works

### 1. Map Initialisation

The map is centred on Queensland and uses a CARTO light basemap.

```js
const map = L.map("map").setView([-21, 146.0], 5);
```

### 2. Renderer and Icon Loading

The script reads the ArcGIS layer metadata and extracts the `drawingInfo.renderer.uniqueValueInfos` array. Each Esri picture marker symbol is converted into a Leaflet icon using its embedded base64 `imageData`.

This allows the Leaflet map to reuse the icons configured on the ArcGIS Online feature layer instead of maintaining a separate icon set in the front-end code.

### 3. Feature Loading

The script queries all features from the ArcGIS FeatureServer layer, converts each point geometry to a Leaflet marker, and adds it to a marker cluster group.

Each marker receives its `Outage_Type` as a marker option so the cluster renderer can count the availability mix of child markers.

### 4. Cluster Rendering

Clusters are displayed as custom donut symbols. The donut segments represent the count of child markers in each outage category. A fuel pump icon and total station count are displayed in the centre of the cluster.

### 5. Popups

Each marker popup includes:

- Service station name
- Address
- Google Maps link
- Information last checked date
- Local Government Area
- Fuel status and price information
- Source attribution
- Disclaimer text

Popup content is escaped before rendering to reduce the risk of injecting unsafe HTML from attribute values.

### 6. Legend

The legend is generated dynamically from the ArcGIS layer renderer. If the renderer changes in ArcGIS Online, the Leaflet legend updates automatically when the page is reloaded.

## Running Locally

Because the example is a static browser page, it can be served with any simple local web server.

Using Python:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```


## Backend Context

The feature layer consumed by this visualisation is maintained by a separate backend process. At a high level, that backend is expected to:

- Retrieve fuel site and price data from the authorised fuel pricing data source
- Process station status and price fields in Python
- Publish or update records in ArcGIS Online
- Run on AWS Lambda on a scheduled basis

Those backend scripts, credentials, deployment templates, and processing rules are intentionally outside the scope of this repository.

## Notes for Integration into an Existing Repo

When adding this visualisation into an existing project:

1. Copy the Leaflet example into the relevant static page or component area.
2. Keep the ArcGIS FeatureServer URL configurable if different environments are required.
3. Keep all API tokens and backend configuration out of the front-end repository.
4. Confirm that the ArcGIS layer is publicly readable if the map is intended to be public.
5. Confirm that the expected field names match the popup and cluster logic.
6. Confirm that the ArcGIS renderer uses supported picture marker symbols if the front end should reuse the AGOL-configured icons.

## Licensing and Attribution

The map includes OpenStreetMap and CARTO basemap attribution.

Fuel data attribution shown in the popup:

```text
Queensland Government (Fuel Prices API), licensed under CC BY 4.0
```

The visualisation also includes a user-facing note that fuel data may be delayed or missing and should not be relied upon as the sole source for decision-making.
