import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getHasFacilitator, getHouseRemainingCapacity, getHouseCapacity } from '../utils/hostHelper';
import * as house from '../constants/houses';


export class HousesCell extends React.Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    const { host, houseRemainingCapacity, hasFacilitator } = this.props;

    let cellClass = 'cell cell__';
    let labelText = hasFacilitator !== 0 ? host.hostInfo.numberLabel.toString() : host.hostInfo.numberLabel.toString() + '*';

    const houseCapacity = getHouseCapacity(host, houseRemainingCapacity, hasFacilitator);
    switch(houseCapacity) {
      case house.FULL:
        cellClass += 'red';
        break;
      case house.ALMOST_FULL:
        cellClass += 'blue';
        labelText = host.hostInfo.houseCapacity - houseRemainingCapacity < 4 ? labelText + '#' : labelText;
        break;
      case house.EMPTY:
        cellClass += 'white';
        break;
      case house.ERROR:
        cellClass += 'purple';
        break;
      case house.ENOUGH_ROOM:
        cellClass += 'green';
        labelText = host.hostInfo.houseCapacity - houseRemainingCapacity < 4 ? labelText + '#' : labelText;
        break;
    }

    return (
      <Link to={`/house/${host.id}`}
        className ={cellClass}
      >{labelText}</Link>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    houseRemainingCapacity: getHouseRemainingCapacity(props.host, state.partakers),
    hasFacilitator: getHasFacilitator(props.host, state.partakers)
  };
};

export default connect(mapStateToProps, undefined)(HousesCell);

