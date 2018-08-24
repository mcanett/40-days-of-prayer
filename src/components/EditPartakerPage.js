import React from 'react';
import { connect } from 'react-redux';
import HostFacilitatorForm from './HostFacilitatorForm';
import { startEditPartaker, startRemovePartaker } from '../actions/partakers';
import selectHosts from '../selectors/hosts';
import * as routes from '../constants/routes';

export class EditPartakerPage extends React.Component {
  onSubmit = (partaker) => {
    this.props.startEditPartaker(this.props.partaker.id, partaker);
    this.props.history.push(routes.REGISTRY);
  };
  onRemove = () => {
    this.props.startRemovePartaker(this.props.partaker.id);
    this.props.history.push(routes.REGISTRY);
  };

  render() {
    return (
      <div>
        <h1>Ingresa los datos de participante</h1>
        <HostFacilitatorForm
          hosts={this.props.hosts}
          partaker={this.props.partaker}
          onSubmit={this.onSubmit}
        />
        <button 
          onClick={this.onRemove}
        >Eliminar Participante</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  partaker: state.partakers.find((partaker) => partaker.id === props.match.params.id),
  hosts: selectHosts(state.partakers)
});

const mapDispatchToProps = (dispatch) => ({
  startEditPartaker: (id, partaker) => dispatch(startEditPartaker(id, partaker)),
  startRemovePartaker: (id) => dispatch(startRemovePartaker({ id }))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPartakerPage);