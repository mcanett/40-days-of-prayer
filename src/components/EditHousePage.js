import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { BlueEditIcon } from './Icons';
import { getHouseRemainingCapacity } from '../utils/hostHelper';
import HousePartakerList from './HousePartakerList';

export class EditHousePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() { 
    const { host, facilitator, housePartakers, houseRemainingCapacity } = this.props;

    const { firstName: nameH, lastName: lastH, mothersSurname: mothersH } = host.name;
    const { streetName, houseNumber, neighborhood, zipCode } = host.hostInfo.address;

    const { firstName: nameF, lastName: lastF, mothersSurname: mothersF } = facilitator ? facilitator.name : {undefined, undefined, undefined};

    let facilitatorRender;
    if (facilitator && host === facilitator) {
      facilitatorRender = <div className="grid">
      <div className="cell__header cell__s">Facilitador:</div>
        <div className="cell__content cell__l">
          <h3>
            {nameF} {lastF} {mothersF}
          </h3>
        </div>
      </div>
    } else if (facilitator) {
      facilitatorRender = <div className="grid">
      <div className="cell__header cell__s">Facilitador:</div>
        <div className="cell__content cell__l">
          <h3>
            {nameF} {lastF} {mothersF}
          </h3>
        </div>
        <div className="cell__content cell__m">
          <h3>
            {facilitator.phone}
          </h3>
        </div>
        <div className="cell__content cell__xs">
          <h3>
            <Link to={{
              pathname: `/edit/${facilitator.id}`,
              search: '',
              state: { detail: 'hf' }
            }}><BlueEditIcon /></Link>
          </h3>
        </div>
      </div>
    } else {
      facilitatorRender = <div className="grid">
        <div className="cell__header cell__s">Facilitador:</div>
        <div className="cell__content cell__l">
          <h3>
            Esta casa no cuenta con facilitador
          </h3>
        </div> 
      </div>
    }



    return (
      <div className="component">
        <div className="component__container">
          <h1 className="component__header">Detalles de casa</h1>
          <div className="grid">  
            <div className="cell__header cell__xs">#:</div>
            <div className="cell__content cell__xs">
              <h3>
                {host.hostInfo.numberLabel}
              </h3>
            </div>
            <div className="cell__header cell__s">Horario:</div>
            <div className="cell__content cell__s">
              <h3>
                {host.hostInfo.houseSchedule}
              </h3>
            </div>
            <div className="cell__header cell__s">Capacidad:</div>
            <div className="cell__content cell__xs">
              <h3>
                { host.hostInfo.houseCapacity}
              </h3>
            </div>
            <div className="cell__header cell__s">Inscritos:</div>
            <div className="cell__content cell__xs">
              <h3>
                { host.hostInfo.houseCapacity - houseRemainingCapacity }
              </h3>
            </div>
          </div>
          
          <div className="grid">  
            <div className="cell__header cell__s">Dirección:</div>
            <div className="cell__content cell__xl">
              <h3>
                {streetName} {houseNumber}, {neighborhood} {zipCode}
              </h3>
            </div>
          </div>
          
          <div className="grid">  
            <div className="cell__header cell__s">Anfitrión:</div>
            <div className="cell__content cell__l">
              <h3>
                {nameH} {lastH} {mothersH}
              </h3>
            </div>
            <div className="cell__content cell__m">
              <h3>
                {host.phone}
              </h3>
            </div>
            <div className="cell__content cell__xs">
              <h3>
                <Link to={{
                  pathname: `/edit/${host.id}`,
                  search: '',
                  state: { detail: 'hf' }
                }}><BlueEditIcon /></Link>
              </h3>
            </div>
            </div>        
            {facilitatorRender}
          <h2 className="component__header">Participantes</h2>
          <HousePartakerList partakers={housePartakers}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const host = state.partakers.find((host) => host.id === props.match.params.id);

  const facilitatorSearch = state.partakers.filter((partaker) => partaker.houseId === host.id && partaker.facilitatorInfo !== undefined);
  const facilitator = host.facilitatorInfo ? host : facilitatorSearch ? facilitatorSearch[0] :  undefined;
  //const facilitator = facilitatorSearch ? facilitatorSearch[0] : undefined;

  const housePartakers = state.partakers.filter((partaker) => partaker.houseId === host.id && partaker.facilitatorInfo === undefined);

  return {
    host,
    facilitator,
    housePartakers,
    houseRemainingCapacity: getHouseRemainingCapacity(host, state.partakers),
  };
};

export default connect(mapStateToProps, undefined)(EditHousePage);