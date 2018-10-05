import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

const SearchPartakerModal = (props) => {
  const { firstName, lastName, mothersSurname } = props.partakerInfo ? props.partakerInfo.partaker.name : { undefined, undefined, undefined };
  const partakerFullName = `${firstName} ${lastName} ${mothersSurname}`;
  const { firstName: lpName, lastName: lpLastName, mothersSurname: lpMothersSurname } = props.lastPartaker ? props.lastPartaker.name : { undefined, undefined, undefined };
  const lastPartakerFullName = `${lpName} ${lpLastName} ${lpMothersSurname}`;
  const partakerType = props.lastPartaker ? 
    props.lastPartaker.hostInfo && props.lastPartaker.facilitatorInfo ? 'anfitrión y facilitador' :
    props.lastPartaker.hostInfo ? 'anfitrión' :
    props.lastPartaker.facilitatorInfo ? 'facilitador' :
    'participante general' : undefined;
  return (
    <Modal
      isOpen={props.openModal}
      onRequestClose={props.handleClearSavedSuccessfully}
      contentLabel="Buscando participante"
      shouldCloseOnOverlayClick={false}
      closeTimeoutMS={200}
      className="modal"
    >
      { props.partakerInfo ?
        props.partakerInfo.state === 'cant' ?
        <div>
          <h3 className="modal__title">El participante</h3>
          <h2 className="modal__body">{partakerFullName}</h2>                
          <h3 className="modal__title">ya tiene datos, debe ir con un supervisor en caso de querer hacer algun cambio.</h3>
          <button className="button" onClick={props.handleClearSavedSuccessfully}>Cerrar</button>
        </div>
        :
        <div>
          <h3 className="modal__title">¿Es usted?</h3>
          <h2 className="modal__body">{partakerFullName}</h2>
          <div className="modal__buttons">
            <button className="button button__gold" onClick={props.onEditHostFacilitator}>Anfritrión/Facilitador</button>
            <button className="button button__positive" onClick={props.onEditPartaker}>General</button>
            <button className="button" onClick={props.handleClearSavedSuccessfully}>Cancelar</button>
          </div>
        </div>
        : props.lastPartaker !== null ? 
        <div>
          <h3 className="modal__title">Se guardo exitosamente el usuario</h3>
          <h2 className="modal__body">{lastPartakerFullName}</h2>
          <h3 className="modal__title">como {partakerType} {partakerType.includes('anfitrión') ? ' con casa:' : ''}</h3>
          {partakerType.includes('anfitrión') && <h2 className="modal__body">{`#${props.lastPartaker.hostInfo.numberLabel}`}</h2>}
          <button className="button button__positive" onClick={props.handleClearSavedSuccessfully}>OK</button>
        </div>
        :
        <div>
          <h3>No se encontro participante</h3>
          <button className="button" onClick={props.handleClearSavedSuccessfully}>Cerrar</button>
        </div>
      }
    </Modal>
  );
}

export default SearchPartakerModal;
