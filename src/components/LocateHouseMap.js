import React from 'react';
import _ from 'lodash';
import { compose, withProps, lifecycle } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { SearchBox } from 'react-google-maps/lib/components/places/SearchBox';

const LocateHouseMap = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCOiw3jG9ytx2GrUwpT9QpxEMdipFMpTgQ&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `800px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  lifecycle({
    componentWillMount() {
      const refs = {}

      this.setState({
        bounds: null,
        zoom: 13,
        center: {
          lat: 32.6137537, lng: -115.4853104
        },
        markers: [],
        onMapMounted: ref => {
          refs.map = ref;
        },
        onBoundsChanged: () => {
          this.setState({
            bounds: refs.map.getBounds(),
            center: refs.map.getCenter(),
          })
        },
        onSearchBoxMounted: ref => {
          refs.searchBox = ref;
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces();
          console.log(places);
          const bounds = new google.maps.LatLngBounds();

          places.forEach(place => {
            if (place.geometry.viewport) {
              bounds.union(place.geometry.viewport)
            } else {
              bounds.extend(place.geometry.location)
            }
          });
          const nextMarkers = places.map(place => ({
            position: place.geometry.location,
          }));
          const nextZoom = 16;
          const nextCenter = _.get(nextMarkers, '0.position', this.state.center);

          this.setState({
            center: nextCenter,
            zoom: nextZoom,
            markers: nextMarkers,
          });
          // refs.map.fitBounds(bounds);
        },
      })
    },
  }),
  withScriptjs,
  withGoogleMap
  )((props) => {

  return (
    <GoogleMap
      onClick={props.onMapClick}
      zoom={props.zoom}
      center={props.center}
      options={{ mapTypeControl: false }}
      onBoundsChanged={props.onBoundsChanged}
      >
      {/*defaultCenter={{ lat: 32.6137537, lng: -115.4853104 }}*/}
      <SearchBox
        ref={props.onSearchBoxMounted}
        bounds={props.bounds}
        controlPosition={google.maps.ControlPosition.TOP_LEFT}
        onPlacesChanged={props.onPlacesChanged}
      >
        <input
          type="text"
          placeholder="Busca la dirección"
          className="text-input"
          style={{
            boxSizing: `border-box`,
            border: `1px solid transparent`,
            marginTop: `27px`,
            width: `340px`,
            borderRadius: `3px`,
            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
            textOverflow: `ellipses`,
          }}
        />
      </SearchBox>
      {props.isMarkerShown && 
        <Marker 
          position={{ lat: props.markerPosition.lat, lng: props.markerPosition.lng }} 
        />
      }
    </GoogleMap>
  );
});

export default LocateHouseMap;