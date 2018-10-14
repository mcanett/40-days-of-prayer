import React from 'react';
import { connect } from 'react-redux';
import MapWithHouses from './MapWithHouses';
import selectHosts from '../selectors/hosts';


export class HousesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  onMarkerClick() {
    console.log("onMarkerClick working!");
  }


  render() {
    return (
      <div className="component">
        <MapWithHouses
          houseId={undefined}
          hosts={this.props.hosts}
          onMarkerClick={this.onMarkerClick}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  hosts: selectHosts(state.partakers),
});

export default connect(mapStateToProps, undefined)(HousesPage);