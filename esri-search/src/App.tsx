import { useEffect, useRef } from 'react'
import esriConfig from '@arcgis/core/config'
import Map from '@arcgis/core/Map'
import Extent from '@arcgis/core/geometry/Extent'
import MapView from '@arcgis/core/views/MapView'
import Search from '@arcgis/core/widgets/Search'
import '@arcgis/core/assets/esri/themes/light/main.css'
import './App.css'

const apiKey = import.meta.env.VITE_ARCGIS_API_KEY

function App() {
  const mapRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!mapRef.current) return

    if (!apiKey) {
      console.warn('VITE_ARCGIS_API_KEY is not set. The ArcGIS map may not load properly.')
    }

    esriConfig.apiKey = apiKey ?? ''

    const view = new MapView({
      container: mapRef.current,
      map: new Map({
        basemap: 'gray',
      }),
      center: [135, -27],
      zoom: 4,
    })

    const searchPanel = document.createElement('div')
    searchPanel.className = 'search-panel'

    const createSearchBox = (labelText: string) => {
      const wrapper = document.createElement('div')
      wrapper.className = 'search-box'

      const label = document.createElement('div')
      label.className = 'search-label'
      label.textContent = labelText

      const container = document.createElement('div')
      container.className = 'search-container'

      wrapper.appendChild(label)
      wrapper.appendChild(container)
      searchPanel.appendChild(wrapper)

      return container
    }

    const globalSearchContainer = createSearchBox('Global search')
    const australiaSearchContainer = createSearchBox('Australia only')
    const whitsundaySearchContainer = createSearchBox('Whitsunday only')
    const withinViewSearchContainer = createSearchBox('Australia within view only')

    new Search({
      view,
      container: globalSearchContainer,
    })

    new Search({
      view,
      container: australiaSearchContainer,
      includeDefaultSources: false,
      sources: [
        {
          url: 'https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer',
          countryCode: 'AU',
          singleLineFieldName: 'SingleLine',
          placeholder: 'Search Australia',
        },
      ],
    })

    const whitsundayExtent = {
      geometry: new Extent({
        xmin: 148.45,
        ymin: -20.55,
        xmax: 149.35,
        ymax: -19.85,
        spatialReference: {
          wkid: 4326
        }
      }),
    }

    new Search({
      view,
      container: whitsundaySearchContainer,
      includeDefaultSources: false,
      sources: [
        {
          url: 'https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer',
          countryCode: 'AU',
          singleLineFieldName: 'SingleLine',
          placeholder: 'Search Whitsundays',
          filter: whitsundayExtent,
        },
      ],
    })

    new Search({
      view,
      container: withinViewSearchContainer,
      includeDefaultSources: false,
      sources: [
        {
          url: 'https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer',
          countryCode: 'AU',
          singleLineFieldName: 'SingleLine',
          placeholder: 'Search Australia within map view',
          withinViewEnabled: true,
        },
      ],
    })

    view.ui.add(searchPanel, 'top-right')

    return () => {
      view.destroy()
    }
  }, [])

  return <div className="app-map" ref={mapRef} />
}

export default App
