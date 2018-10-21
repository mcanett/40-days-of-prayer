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
    
    const whtIconUrl = "http://maps.google.com/mapfiles/kml/paddle/wht-blank.png";
    const greenIconUrl = "http://maps.google.com/mapfiles/kml/paddle/grn-blank.png";
    const blueIconUrl = "http://maps.google.com/mapfiles/kml/paddle/blu-blank.png";
    const redIconUrl = "http://maps.google.com/mapfiles/kml/paddle/red-blank.png";
    let iconUrl = '';
    let title = '';

    if( houseRemainingCapacity <= 0) {
      iconUrl = redIconUrl;
      title = 'Casa llena';
    } else if (houseRemainingCapacity <= (host.hostInfo.houseCapacity/2)) {
      iconUrl = blueIconUrl;
      title = 'Casa casi llena';
    }else if (houseRemainingCapacity === host.hostInfo.houseCapacity) {
      iconUrl = whtIconUrl;
      title = 'Todo el cupo';
    } else {
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