import React from 'react'
import ReactDOM from 'react-dom'
import { MapsApp } from './MapsApp'
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');" 
mapboxgl.accessToken = 'pk.eyJ1IjoiZ2lhbnphcGF0YSIsImEiOiJja3h0N2g0Y3A1aWloMnlxOWV3Z2t4OHVmIn0.EyviOTyefB5VYDWroQfpIQ';

if(!navigator.geolocation) {
  alert("Please enable your geolocation")
  throw new Error("Geolocation is not enabled")
}
  
ReactDOM.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
  document.getElementById('root')
)
