import React from 'react';
import mapImg from './images/india map.jpg';
// import pinImg from './images/pin-trans.png';
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

                        <div id={`pin ${city.id}`} class="pin" style={{left: city['pinx'], top: city['piny']}}>
                            <svg class="svgPinClass" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 512 512" viewBox="0 0 512 512">
                                <path fill="" fill-rule="evenodd" d="M457.457,440.463C457.457,475.554,367.262,504,256,504c-111.262,0-201.457-28.446-201.457-63.537
                                    c0-27.566,55.666-51.028,133.475-59.825c9.324,12.538,18.423,24.389,26.899,35.24c-29.606,4.208-49.899,12.82-49.899,22.762
                                    c0,14.086,40.734,25.505,90.982,25.505c50.248,0,90.982-11.419,90.982-25.505c0-9.933-20.257-18.539-49.821-22.751
                                    c8.526-10.867,17.662-22.711,27.014-35.229C401.883,389.473,457.457,412.919,457.457,440.463L457.457,440.463z M256,8
                                    C167.988,8,96.64,79.348,96.64,167.36c0,73.139,106.233,208.215,155.462,269.667c0.979,1.223,2.328,1.87,3.897,1.87
                                    c1.567,0.003,2.915-0.645,3.897-1.865c47.19-58.805,155.463-194.524,155.463-269.672C415.36,79.348,344.012,8,256,8L256,8z
                                    M256,83.664c46.116,0,83.502,37.386,83.502,83.502c0,46.117-37.385,83.502-83.502,83.502c-46.117,0-83.502-37.385-83.502-83.502
                                    C172.498,121.05,209.883,83.664,256,83.664z" clip-rule="evenodd"/>
                            </svg>
                        </div>
                        {/* <img src={pinImg} alt={`${city.name} pin`} id={`pin ${city.id}`} class="pin" style={{left: city['pinx'], top: city['piny']}}/> */}
                        <MapCard city={city} />
                    </>
                ))}
            </div>
        </div>
     );
}
 
export default Map;