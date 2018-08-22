import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const LocateHouseMap = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCOiw3jG9ytx2GrUwpT9QpxEMdipFMpTgQ&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `800px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
  )((props) => {

  return (
    <GoogleMap
      onClick={props.onMapClick}
      defaultZoom={13}
      defaultCenter={{ lat: 32.6137537, lng: -115.4853104 }}
      options={{streetViewControl: false, mapTypeControl: false}}
    >
      {props.isMarkerShown && 
        <Marker 
          position={{ lat: props.markerPosition.lat, lng: props.markerPosition.lng }} 
        />
      }
    </GoogleMap>
  );
});

export default LocateHouseMap;