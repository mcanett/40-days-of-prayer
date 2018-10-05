import React from 'react';
import { connect } from 'react-redux';
import HostFacilitatorForm from './HostFacilitatorForm';
import PartakerBasicForm from './PartakerBasicForm';
import { startEditPartaker, startRemovePartaker } from '../actions/partakers';
import selectHosts from '../selectors/hosts';
import * as routes from '../constants/routes';

export class EditPartakerPage extends React.Component {
  onSubmit = (partaker) => {
    this.props.startEditPartaker(this.props.partaker.id, partaker, this.props.userName).then(() => {
      this.props.history.push(routes.REGISTRY);
    });
  };
  onRemove = () => {
    this.props.startRemovePartaker(this.props.partaker.id);
    this.props.history.push(routes.REGISTRY);
  };

  render() {
    return (
      <div className="component">
      { this.props.location.state.detail === 'hf' ?
        <HostFacilitatorForm
          hosts={this.props.hosts}
          partaker={this.props.partaker}
          onSubmit={this.onSubmit}
        />
        :
        <PartakerBasicForm 
          hosts={this.props.hosts}
          partaker={this.props.partaker}
          onSubmit={this.onSubmit}
        />
      }
        {/*<button
          className="button button__danger"
          onClick={this.onRemove}
        >Eliminar Participante</button>*/}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  partaker: state.partakers.find((partaker) => partaker.id === props.match.params.id),
  hosts: selectHosts(state.partakers),
  userName: state.auth.userName
});

const mapDispatchToProps = (dispatch) => ({
  startEditPartaker: (id, partaker, userName) => dispatch(startEditPartaker(id, partaker, userName)),
  startRemovePartaker: (id) => dispatch(startRemovePartaker({ id }))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPartakerPage);