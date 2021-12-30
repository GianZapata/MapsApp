import { useContext } from 'react';
import { MapContext, PlacesContext } from '../context';
export const BtnMyLocation = () => {
   const { map, isMapReady } = useContext( MapContext );
   const { userLocation } = useContext( PlacesContext );
   const handleClick = () => {
      if(!isMapReady || !map) throw new Error('Mapa no esta listo');
      if(!userLocation) throw new Error('No hay ubicación del usuario');
      map?.flyTo({
         zoom: 14,
         center: userLocation
      })
   };

   return (
      <button className="btn btn-primary"
         onClick={handleClick}
         style={{ 
            position: "fixed",
            top: "20px",
            right: "20px",
            zIndex: 9999
         }}
      >Mi Ubicación
      </button>
   )
}
