import axios from "axios";

const DirectionsApi = axios.create({
   baseURL: "https://api.mapbox.com/directions/v5/mapbox/driving",
   params: {
      alternatives: false,
      geometries: 'geojson',
      overview: 'simplified',
      steps: false,
      access_token: "pk.eyJ1IjoiZ2lhbnphcGF0YSIsImEiOiJja3h0N2g0Y3A1aWloMnlxOWV3Z2t4OHVmIn0.EyviOTyefB5VYDWroQfpIQ",      
   }
})

export default DirectionsApi;