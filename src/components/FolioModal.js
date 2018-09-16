import React from 'react';
import Modal from 'react-modal';
import { SyncLoader } from 'react-spinners';

const loaderColor = '#ffd39b';

Modal.setAppElement('#app');

const FolioModal = (props) => (
  <Modal
    isOpen={props.openModal}
    onRequestClose={props.handleClearCreatedFolio}
    contentLabel="Created Folio"
    shouldCloseOnOverlayClick={false}
    closeTimeoutMS={200}
    className="modal"
    >
    { props.lastPartaker !== null ? 
      <div>
        <h3 className="modal__title">Folio Exitosamente Creado</h3>
        {<h2 className="modal__body">{props.lastPartaker.folio}</h2>}
        <button className="button button__positive" onClick={props.handleClearCreatedFolio}>OK</button>
      </div>
      :
      <SyncLoader className="loader" color={loaderColor}/>
    }
  </Modal>
);

export default FolioModal;