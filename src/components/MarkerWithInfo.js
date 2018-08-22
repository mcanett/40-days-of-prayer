import React from 'react';
import { Marker, InfoWindow } from 'react-google-maps';

export default class MarkerWithInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: props.isOpen
    }
  }

  onMarkerClick = (id) => {
    this.props.handleClick(id);
    this.setState(() => ({ isOpen: !this.state.isOpen }));
  }

  render() {
    const { host } = this.props;
    return (
      <Marker key={this.props.host.id}
              position={{ lat: host.hostInfo.location.lat, lng: host.hostInfo.location.lng }}
              onClick={() => this.onMarkerClick(host.id)}
              >
        {/*label={'888'}*/}
        {this.state.isOpen &&
            <InfoWindow position={{ lat: host.hostInfo.location.lat, lng: host.hostInfo.location.lng }}
                        onCloseClick={() => this.onMarkerClick()}>
              <div>
                <h4>Anfitrión:</h4> 
                <h3>{`${host.name.firstName} ${host.name.lastName} ${host.name.mothersSurname}`}</h3>
                <h4>Dirección:</h4>
                <h3>
                  {host.hostInfo.address.streetName} {host.hostInfo.address.houseNumber} {host.hostInfo.address.neighborhood}, {host.hostInfo.address.zipCode}
                </h3>
              </div>
            </InfoWindow>
        }
      </Marker>
    );
  }
}