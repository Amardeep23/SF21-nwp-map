import React from 'react';
import mapImg from './images/india map.jpg';
import pinImg from './images/pin-trans.png';
import './Map.css';
import data from './data.json';
import MapCard from './MapCard';


const Map = () => {
    return ( 
        <div class="map-div">
            <div class="map">
                <img src={mapImg} alt="India Map" class="map-img"/>
                {data.cities.map(city => (
                    <>
                        <img src={pinImg} alt={`${city.name} pin`} id={`pin ${city.id}`} class="pin" style={{left: city['pinx'], top: city['piny']}}/>
                        <MapCard city={city} />
                    </>
                ))}
            </div>
        </div>
     );
}
 
export default Map;