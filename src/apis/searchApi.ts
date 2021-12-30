import axios from "axios";

const SearchApi = axios.create({
   baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
   params: {
      limit: 5,
      language: "es",
      access_token: "pk.eyJ1IjoiZ2lhbnphcGF0YSIsImEiOiJja3h0N2g0Y3A1aWloMnlxOWV3Z2t4OHVmIn0.EyviOTyefB5VYDWroQfpIQ",      
   }
})

export default SearchApi;