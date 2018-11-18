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
    const { host, houseRemainingCapacity, hasFacilitator } = this.props;
    
    const whiteIconUrl = "http://maps.google.com/mapfiles/kml/paddle/wht-blank.png";
    const greenIconUrl = "http://maps.google.com/mapfiles/kml/paddle/grn-blank.png";
    const blueIconUrl = "http://maps.google.com/mapfiles/kml/paddle/blu-blank.png";
    const redIconUrl = "http://maps.google.com/mapfiles/kml/paddle/red-blank.png";
    const purpleIconUrl = "http://maps.google.com/mapfiles/kml/paddle/purple-blank.png";
    let iconUrl = '';
    let title = '';

    if( houseRemainingCapacity <= 0) {
      iconUrl = redIconUrl;
      title = 'Casa llena';
    } else if (houseRemainingCapacity <= (host.hostInfo.houseCapacity/2)) {
      iconUrl = blueIconUrl;
      title = 'Casa casi llena';
    } else if (
      ((hasFacilitator === 2 || hasFacilitator === 0) && houseRemainingCapacity === host.hostInfo.houseCapacity - 1) || // Self facilitator or Hasn't facilitator
      (hasFacilitator === 1 && houseRemainingCapacity === host.hostInfo.houseCapacity - 2) // Has facilitator
    ) {
      iconUrl = whiteIconUrl;
      title = 'Todo el cupo';
    } else if (hasFacilitator === 3) {
      iconUrl = purpleIconUrl;
      title = 'ERROR';
    }else {
      iconUrl = greenIconUrl;
      title = 'Suficiente cupo';
    }

    return (
      <Marker key={host.id}
              position={{ lat: host.hostInfo.location.lat, lng: host.hostInfo.location.lng }}
              onClick={houseRemainingCapacity <= 0 ? () => (false) : () => this.onMarkerClick(host.id)}
              label={{
                "text": host.hostInfo.numberLabel.toString(),
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
  let hasFacilitator = undefined;
  if (props.host.facilitatorInfo !== undefined) {
    hasFacilitator = 2; // self facilitator
  } else {
    const facilitator = state.partakers.filter(partaker => partaker.houseId === props.host.id && partaker.facilitatorInfo !== undefined)
    if (facilitator.length > 1) {
      hasFacilitator = 3; // error (more than 1 facilitator)
    } else if (facilitator.length === 1) {
      hasFacilitator = 1; // has facilitator
    } else {
      hasFacilitator = 0; // hasn't facilitator
    }
  }

  return {
    houseRemainingCapacity: (
      props.host.hostInfo.houseCapacity - 
      state.partakers.filter(partaker => partaker.houseId === props.host.id).length
      ) - 1,
    hasFacilitator
  };
};

export default connect(mapStateToProps, undefined)(MarkerWithInfo);