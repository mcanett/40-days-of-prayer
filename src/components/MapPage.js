import React from 'react';
import { connect } from 'react-redux';
import MapWithHouses from './MapWithHouses';
import MapFilters from './MapFilters';
import selectHosts from '../selectors/hosts';
import selectMapHouses from '../selectors/map-houses';
import { getHasFacilitator, getHouseRemainingCapacity } from '../utils/hostHelper';


export class MapPage extends React.Component {
  constructor(props) {
    super(props);
  }

  onMarkerClick() {
    console.log("onMarkerClick working!");
  }


  render() {
    return (
      <div className="component">
        <div className="component__container">
          <h2 className="component__header not-printable">Filtros del mapa</h2>
          <h3 className="component__header not-printable">Estas viendo <span>{this.props.hosts.length}</span> casas en el mapa</h3>
          <MapFilters />
        </div>
        <MapWithHouses
          houseId={undefined}
          hosts={this.props.hosts}
          onMarkerClick={this.onMarkerClick}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const onlyHosts = selectHosts(state.partakers);
  let hostsDetails = [];

  onlyHosts.forEach((host) => {
    hostsDetails[host.id] = { 
      houseRemainingCapacity: getHouseRemainingCapacity(host, state.partakers),
      hasFacilitator: getHasFacilitator(host, state.partakers)
    }
  });

  return {
    hosts: selectMapHouses(onlyHosts, state.mapFilters, hostsDetails),
  };
};

export default connect(mapStateToProps, undefined)(MapPage);