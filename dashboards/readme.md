# QIT Plus Dashboards

**Important: All texts, code and files in this repository are intellectual property of QIT Plus and can't be used without QIT Plus written permission.**

The **map interface** is available at [QIT Plus - Dashboards](https://qitplusgis.github.io/dashboards/dist/).

# Parameters to adjust the user interface
Examples are available at [Examples aa iframes](https://qitplusgis.github.io/dashboards/dist/iframe.html).

E.g. [Same page with light color template, no heading, no search panel and layer effect turned off](https://qitplusgis.github.io/dashboards/dist/?ct=light&sh=0&ssp=0&le=0).

## Color template - ct
Color templates are sourced from /dashboards/js/ui/colorTemplates.js. Feel free to add template or adjust. Current domain: default, light, dark, christmas, fuchsia

## Show header - sh
To turn header off set sh=0

## Show search panel - ssp
To turn search panel off set ssp=0. This setting also makes clicking on polygons with dashboard url to directly open dashboard in new window.

## Layer effect - le
By default effect on LGA layer (in code as **ab** for administrative boundaries) is set *bloom* for polygons with dashboard url (dash_url) and *opacity* and *drop-shadow* for rest.
To turn layer effect off set le=0

## Show river flow - srf
This feature was planned to show flow of rivers in Australia but is not implemented yet due to complications with setup of underlying layer (dataset). Maybe in future.
