import React from 'react';
import {
  compose,
  withProps
} from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,

} from 'react-google-maps';
// import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";
import MarkerWithInfo from './MarkerWithInfo';


  const MapWithHouses = compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCOiw3jG9ytx2GrUwpT9QpxEMdipFMpTgQ&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `800px` }} />,
      mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
    )((props) => {

    return (
      <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: 32.6137537, lng: -115.4853104 }}
        options={{streetViewControl: false, mapTypeControl: false}}
      >
        {/*<MarkerClusterer
          averageCenter
          enableRetinaIcons
          gridSize={60}
        >*/}
          {props.hosts.map(host => {
            const isOpen = props.houseId === host.id;
            return (<MarkerWithInfo 
              isOpen={isOpen}
              key={host.id}
              host={host}
              handleClick={props.onMarkerClick}
            />
            );
          })
        }
        {/*</MarkerClusterer>*/}
      </GoogleMap>
    );
  });

export default MapWithHouses;