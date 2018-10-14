import React from 'react';
import { connect } from 'react-redux';
import { Marker, InfoWindow } from 'react-google-maps';

export class MarkerWithInfo extends React.Component {
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
    const { host, houseRemainingCapacity } = this.props;
    return (
      <Marker key={host.id}
              position={{ lat: host.hostInfo.location.lat, lng: host.hostInfo.location.lng }}
              onClick={() => this.onMarkerClick(host.id)}
              label={host.hostInfo.numberLabel.toString()}
              >
              {/*icon="http://maps.google.com/mapfiles/ms/icons/blue.png"*/}
              {this.state.isOpen &&
            <InfoWindow position={{ lat: host.hostInfo.location.lat, lng: host.hostInfo.location.lng }}
                        onCloseClick={() => this.onMarkerClick()}>
              <div className="info-window">
                <h4>Anfitrión:</h4> 
                <h3>{`${host.name.firstName} ${host.name.lastName} ${host.name.mothersSurname}`}</h3>
                <h4>Dirección:</h4>
                <h3>
                  {host.hostInfo.address.streetName} {host.hostInfo.address.houseNumber} {host.hostInfo.address.neighborhood}, {host.hostInfo.address.zipCode}
                </h3>
                <h4>Horario:</h4>
                <h3>
                  {host.hostInfo.houseSchedule}
                </h3>
                <h4>Cupo:</h4>
                <h3>
                  {houseRemainingCapacity}
                </h3>
              </div>
            </InfoWindow>
        }
      </Marker>
    );
  }
}

const mapStateToProps = (state, props) => ({
  houseRemainingCapacity: (props.host.hostInfo.houseCapacity - state.partakers.filter(partaker => partaker.houseId === props.host.id).length) - 1
});

export default connect(mapStateToProps, undefined)(MarkerWithInfo);