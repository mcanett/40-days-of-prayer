import React from 'react';
import { connect } from 'react-redux';
import { 
  searchHouseByNumber,
  setAlmostFullHouses,
  setEnoughRoomHouses,
  setFullHouses,
  setEmptyHouses,
  setWithFacilitatorHouses,
  setWithoutFacilitatorHouses
} from '../actions/mapFilters';

export class MapFilters extends React.Component {
  
  onTextChange = (e) => {
    const text = e.target.value
    if (!text || text.match(/^\d{1,3}$/)) {
      this.props.searchHouseByNumber(text);
    }
  };

  onWithFacilitatorChange = () => {
    this.props.setWithFacilitatorHouses();
  };

  onWithoutFacilitatorChange = () => {
    this.props.setWithoutFacilitatorHouses();
  };

  onFullHousesChange = () => {
    this.props.setFullHouses();
  };

  onAlmostFullHousesChange = () => {
    this.props.setAlmostFullHouses();
  };
  
  onEnoughRoomHousesChange = () => {
    this.props.setEnoughRoomHouses();
  };

  onEmptyHousesChange = () => {
    this.props.setEmptyHouses();
  };
  
  render() {
    return (
      <div>
        <div className="input-group not-printable">
          <div className="input-group__item">
            <input
              className="text-input"
              type="text"
              placeholder="# de casa"
              value={this.props.filters.text}
              onChange={this.onTextChange}
            />
          </div>
          <div className="input-group__item">
            <div className="tag">Con facilitador</div>
            <input
            id="withFacilitator"
            type="checkbox"
            className="regular-checkbox big-checkbox"
            onChange={this.onWithFacilitatorChange}
            defaultValue={this.props.filters.withFacilitatorHouses}
            checked={this.props.filters.withFacilitatorHouses}
            /><label htmlFor="withFacilitator"></label>
          </div>
          <div className="input-group__item">
            <div className="tag">Sin facilitador</div>
            <input
            id="withoutFacilitator"
            type="checkbox"
            className="regular-checkbox big-checkbox"
            onChange={this.onWithoutFacilitatorChange}
            defaultValue={this.props.filters.withoutFacilitatorHouses}
            checked={this.props.filters.withoutFacilitatorHouses}
            /><label htmlFor="withoutFacilitator"></label>
          </div>
          {/*<div className="input-group__item">
              <span>*</span> = Casas sin facilitador
          </div>*/}
        </div>
        <div className="input-group not-printable">
          <div className="input-group__item">
            <div className="tag">Casas llenas</div>
            <input
            id="fullHouses"
            type="checkbox"
            className="regular-checkbox big-checkbox"
            onChange={this.onFullHousesChange}
            defaultValue={this.props.filters.fullHouses}
            checked={this.props.filters.fullHouses}
            /><label htmlFor="fullHouses"></label>
          </div>
          <div className="input-group__item">
            <div className="tag">Casi llenas</div>
            <input
            id="almostFullHouses"
            type="checkbox"
            className="regular-checkbox big-checkbox"
            onChange={this.onAlmostFullHousesChange}
            defaultValue={this.props.filters.almostFullHouses}
            checked={this.props.filters.almostFullHouses}
            /><label htmlFor="almostFullHouses"></label>
          </div>
          <div className="input-group__item">
            <div className="tag">Suficiente cupo</div>
            <input
            id="enoughRoomHouses"
            type="checkbox"
            className="regular-checkbox big-checkbox"
            onChange={this.onEnoughRoomHousesChange}
            defaultValue={this.props.filters.enoughRoomHouses}
            checked={this.props.filters.enoughRoomHouses}
            /><label htmlFor="enoughRoomHouses"></label>
          </div>
          <div className="input-group__item">
            <div className="tag">Vacias</div>
            <input
            id="emptyHouses"
            type="checkbox"
            className="regular-checkbox big-checkbox"
            onChange={this.onEmptyHousesChange}
            defaultValue={this.props.filters.emptyHouses}
            checked={this.props.filters.emptyHouses}
            /><label htmlFor="emptyHouses"></label>
          </div>
          {/*<div className="input-group__item">
              <span>#</span> = Casas con menos de 4 personas
          </div>*/}
          </div>
          <div className="input-group not-printable">
            <div className="input-group__item">
              <span>*</span> = Casas sin facilitador
            </div>
            <div className="input-group__item">
              <span>#</span> = Casas con menos de 4 personas
            </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.mapFilters
});

const mapDispatchToProps = (dispatch) => ({
  searchHouseByNumber: (text) => dispatch(searchHouseByNumber(text)),
  setAlmostFullHouses: () => dispatch(setAlmostFullHouses()),
  setEnoughRoomHouses: () => dispatch(setEnoughRoomHouses()),
  setFullHouses: () => dispatch(setFullHouses()),
  setEmptyHouses: () => dispatch(setEmptyHouses()),
  setWithFacilitatorHouses: () => dispatch(setWithFacilitatorHouses()),
  setWithoutFacilitatorHouses: () => dispatch(setWithoutFacilitatorHouses())
});

export default connect(mapStateToProps, mapDispatchToProps)(MapFilters);