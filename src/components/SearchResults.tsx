import { useContext, useState } from 'react';
import { MapContext, PlacesContext } from '../context';
import { LoadingPlaces } from './';
import { Feature } from '../interfaces/places';

export const SearchResults = () => {
   const { places, isLoadingPlaces, userLocation } = useContext( PlacesContext );
   const { map, getRouteBetweenPoints } = useContext( MapContext );

   const [activeId, setActiveId] = useState('');

   const onPlaceClicked = ( place : Feature ) => {
      const [ lng, lat ] = place.center;
      setActiveId( place.id );
      map?.flyTo({
         zoom: 14,
         center: [ lng, lat ]
      })
   };

   const getRoute = ( place: Feature ) => {
      if ( !userLocation ) return;
      const [ lng, lat ] = place.center;
      getRouteBetweenPoints( userLocation, [ lng, lat ] );
   };

   if ( isLoadingPlaces ) return <LoadingPlaces/>;    

   return (
      <ul className={`list-group ${places.length === 0 ? '' : 'mt-3' }`}>
         { places.map(place => (
            <li 
               onClick={() => onPlaceClicked( place )}
               key={place.id}
               className={`list-group-item list-group-item-action pointer ${(place.id === activeId) ? 'active' : '' }`}
            >
               <h6>{place.text_es}</h6>
               <p    
                  style={{ 
                     fontSize: '12px'
                  }}
               >{place.text_es}</p>
               <button 
                  onClick={() => getRoute( place )}
                  className={`btn btn-sm ${activeId === place.id ? 'btn-outline-light' : 'btn-outline-primary'}`}
               >Direcciones</button>
            </li>
         )) }         
      </ul>
   )
}
