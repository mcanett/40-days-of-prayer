import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

const HandbookModal = (props) => {
  return (
    <Modal
      isOpen={props.openModal}
      onRequestClose={props.onModalRequestClose}
      contentLabel="Buscando participante"
      shouldCloseOnOverlayClick={false}
      closeTimeoutMS={200}
      className="modal"
    >
      <div>
        <h3 className="modal__title">¿Está seguro de invalidar que esta persona tiene manual?</h3>
        {/*<h2 className="modal__body">{partakerFullName}</h2>*/}
        <div className="modal__buttons">
          <button className="button button__danger" onClick={props.handleSetOffHasHandbook}>Estoy seguro</button>
          <button className="button" onClick={props.onModalRequestClose}>Cancelar</button>
        </div>
      </div>
    </Modal>
  );
}


export default HandbookModal;