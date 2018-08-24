import React from 'react';
import { connect } from 'react-redux';
import SearchPartakerForm from './SearchPartakerForm';
import searchPartaker from '../selectors/search-partaker';
import Modal from 'react-modal';
import { SyncLoader } from 'react-spinners';

export class SearchPartakerPage extends React.Component {
  state = {
    openModal: false,
    partaker: undefined
  };

  onEdit = () => {
    this.props.history.push('/edit/' + this.state.partaker.id);
  };

  onSearch = (partakerText) => {
    const partaker = searchPartaker(this.props.partakers, partakerText)
    this.setState(() => ({
      openModal: true,
      partaker
    }));
  }

  onCloseModal = () => {
    this.setState(() => ({ openModal: !this.state.openModal }));
  };

  render() {
    return (
      <div>
        <SearchPartakerForm onSearch={this.onSearch}/>
          <Modal
            isOpen={this.state.openModal}
            onRequestClose={this.onCloseModal}
            contentLabel="Buscando participante"
            shouldCloseOnOverlayClick={false}
            closeTimeoutMS={200}
            className="modal"
            >
            { this.state.partaker ? 
              <div>
                <h3 className="modal__title">¿Es usted?</h3>
                {<h2 className="modal__body">{this.state.partaker.name.firstName} {this.state.partaker.name.lastName} {this.state.partaker.name.mothersSurname}</h2>}
                <button className="button" onClick={this.onEdit}>Editar</button>
                <button className="button" onClick={this.onCloseModal}>Cancelar</button>
              </div>
              :
              <div>
                <h3>No se encontro participante</h3>
                <button onClick={this.onCloseModal}>Cerrar</button>
              </div>
            }
          </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  partakers: state.partakers
});

export default connect(mapStateToProps, undefined)(SearchPartakerPage);