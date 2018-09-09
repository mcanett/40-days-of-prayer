import React from 'react';
import { connect } from 'react-redux';
import SearchPartakerForm from './SearchPartakerForm';
import searchPartaker from '../selectors/search-partaker';
import Modal from 'react-modal';
import { SyncLoader } from 'react-spinners';

export class SearchPartakerPage extends React.Component {
  state = {
    openModal: false,
    partakerInfo: undefined
  };

  onEdit = () => {
    this.props.history.push('/edit/' + this.state.partakerInfo.partaker.id);
  };

  onSearch = (partakerText) => {
    const partakerInfo = searchPartaker(this.props.partakers, partakerText, this.props.userType)
    if (partakerInfo !== undefined && partakerInfo.state === 'name') {
      this.props.history.push('/edit/' + partakerInfo.partaker.id);
    } 
    this.setState(() => ({
      openModal: true,
      partakerInfo
    }));
  }

  onCloseModal = () => {
    this.setState(() => ({ openModal: !this.state.openModal }));
  };

  render() {
    return (
      <div className="component">
        <div className="component__container">
          <h1 className="component__header">Busqueda del participante</h1>
          <SearchPartakerForm onSearch={this.onSearch}/>
            <Modal
              isOpen={this.state.openModal}
              onRequestClose={this.onCloseModal}
              contentLabel="Buscando participante"
              shouldCloseOnOverlayClick={false}
              closeTimeoutMS={200}
              className="modal"
              >
              { this.state.partakerInfo ?
                this.state.partakerInfo.state === 'cant' ?
                <div>
                  <h3 className="modal__title">El participante</h3>
                  <h2 className="modal__body">{this.state.partakerInfo.partaker.name.firstName} {this.state.partakerInfo.partaker.name.lastName} {this.state.partakerInfo.partaker.name.mothersSurname}</h2>                
                  <h3 className="modal__title">ya tiene datos, debe ir con un supervisor en caso de querer hacer algun cambio.</h3>
                  <button className="button" onClick={this.onCloseModal}>Cerrar</button>
                </div>
                :
                <div>
                  <h3 className="modal__title">¿Es usted?</h3>
                  <h2 className="modal__body">{this.state.partakerInfo.partaker.name.firstName} {this.state.partakerInfo.partaker.name.lastName} {this.state.partakerInfo.partaker.name.mothersSurname}</h2>
                  <button className="button button__positive" onClick={this.onEdit}>Editar</button>
                  <button className="button" onClick={this.onCloseModal}>Cancelar</button>
                </div>
                :
                <div>
                  <h3>No se encontro participante</h3>
                  <button className="button" onClick={this.onCloseModal}>Cerrar</button>
                </div>
              }
            </Modal>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  partakers: state.partakers,
  userType: state.auth ? state.auth.userType : null
});

export default connect(mapStateToProps, undefined)(SearchPartakerPage);