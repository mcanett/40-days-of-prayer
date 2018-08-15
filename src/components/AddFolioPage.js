import React from 'react';
import { connect } from 'react-redux';
import PartakerNameForm from './PartakerNameForm';
import { startAddFolio } from '../actions/partakers';

export class AddFolioPage extends React.Component {
  onSubmit = (partakerName) => {
    this.props.startAddFolio(partakerName).then(() => {
      this.props.history.push('/finances');
    });
  };
  render() {
    return (
      <div>
        <h1>Creación de folio</h1>
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