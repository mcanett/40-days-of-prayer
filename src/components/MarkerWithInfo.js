import React from 'react';
import { connect } from 'react-redux';
import { Marker, InfoWindow } from 'react-google-maps';
import { getHasFacilitator, getHouseRemainingCapacity, getHouseCapacity } from '../utils/hostHelper';
import * as house from '../constants/houses';

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
    const { host, houseRemainingCapacity, hasFacilitator } = this.props;
    
    const whiteIconUrl = "http://maps.google.com/mapfiles/kml/paddle/wht-blank.png";
    const greenIconUrl = "http://maps.google.com/mapfiles/kml/paddle/grn-blank.png";
    const blueIconUrl = "http://maps.google.com/mapfiles/kml/paddle/blu-blank.png";
    const redIconUrl = "http://maps.google.com/mapfiles/kml/paddle/red-blank.png";
    const purpleIconUrl = "http://maps.google.com/mapfiles/kml/paddle/purple-blank.png";
    let iconUrl = '';
    let title = '';
    let labelText = hasFacilitator !== 0 ? host.hostInfo.numberLabel.toString() : host.hostInfo.numberLabel.toString() + '*';

    const houseCapacity = getHouseCapacity(host, houseRemainingCapacity, hasFacilitator);
    switch(houseCapacity) {
      case house.FULL:
        iconUrl = redIconUrl;
        title = 'Casa llena';
        break;
      case house.ALMOST_FULL:
        iconUrl = blueIconUrl;
        title = 'Casa casi llena';
        labelText = host.hostInfo.houseCapacity - houseRemainingCapacity < 5 ? labelText + '#' : labelText;
        break;
      case house.EMPTY:
        iconUrl = whiteIconUrl;
        title = 'Todo el cupo';
        break;
      case house.ERROR:
        iconUrl = purpleIconUrl;
        title = 'ERROR';
        break;
      case house.ENOUGH_ROOM:
        iconUrl = greenIconUrl;
        title = 'Suficiente cupo';
        labelText = host.hostInfo.houseCapacity - houseRemainingCapacity < 5 ? labelText + '#' : labelText;
        break;
    }

    return (
      <Marker key={host.id}
              position={{ lat: host.hostInfo.location.lat, lng: host.hostInfo.location.lng }}
              onClick={houseRemainingCapacity <= 0 ? () => (false) : () => this.onMarkerClick(host.id)}
              label={{
                "text": labelText,
                "fontSize": "14px"
              }}
              title={title}
              icon={{
                "url": iconUrl,
                "labelOrigin": new google.maps.Point(32, 19)
              }}
              labelClass="marker-label"
              >
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
                <h3>{host.hostInfo.houseSchedule}</h3>
                <div className="info-window__row">
                  <div>
                    <h4>Capacidad:</h4>
                    <h3>{host.hostInfo.houseCapacity}</h3>
                  </div>
                  <div>
                    <h4>Inscritos:</h4>
                    <h3>{host.hostInfo.houseCapacity - houseRemainingCapacity}</h3>
                  </div>
                  <div>
                    <h4>Cupo:</h4>
                    <h3>{houseRemainingCapacity}</h3>
                  </div>
                </div>
              </div>
            </InfoWindow>
        }
      </Marker>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    houseRemainingCapacity: getHouseRemainingCapacity(props.host, state.partakers),
    hasFacilitator: getHasFacilitator(props.host, state.partakers)
  };
};

export default connect(mapStateToProps, undefined)(MarkerWithInfo);