import React from 'react';
import { connect } from 'react-redux';
import PartakerNameForm from './PartakerNameForm';
import { startAddFolio } from '../actions/partakers';
import * as routes from '../constants/routes';

export class AddFolioPage extends React.Component {
  onSubmit = (partakerName) => {
    this.props.startAddFolio(partakerName).then(() => {
      this.props.history.push(routes.FINANCES);
    });
  };
  render() {
    return (
      <div className="component">
        <h1 className="component__header">Creación de folio</h1>
        <PartakerNameForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddFolio: (partakerName) => dispatch(startAddFolio(partakerName))
});

export default connect(undefined, mapDispatchToProps)(AddFolioPage);