import React from 'react';
import { connect } from 'react-redux';
import MapFilters from './MapFilters';
import HousesGrid from './HousesGrid';
import selectHosts from '../selectors/hosts';
import selectMapHouses from '../selectors/map-houses';
import { getHasFacilitator, getHouseRemainingCapacity } from '../utils/hostHelper';


export class HousesDashboardPage extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="component">
        <div className="component__container">
          <h3 className="component__header not-printable">Estas viendo <span>{this.props.hosts.length}</span> casas</h3>
          <MapFilters />
          <HousesGrid hosts={this.props.hosts}/>
        </div>
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

export default connect(mapStateToProps, undefined)(HousesDashboardPage);