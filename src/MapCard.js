const MapCard = ({city}) => {
    return ( 
        <div class="map-card" style={{left: city.cardx, top: city.cardy}}>
            <div class="map-card-image" style={{backgroundImage: `url(${city.image})`}} alt={city.tag}></div>
      
            <h4 class="map-card-heading">
              {city.name}
            </h4>
        
            <div class="map-card-text">
                Click on the pin to go to the city's events page &rarr;
            </div>
        </div>
     );
}
 
export default MapCard;