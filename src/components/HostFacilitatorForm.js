import React from 'react';
import LocateHouseMap from './LocateHouseMap';
import MapWithHouses from './MapWithHouses';

export default class HostFacilitatorForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      folio: props.partaker ? props.partaker.folio : '',
      lastName: props.partaker ? props.partaker.name.lastName : '',
      mothersSurname: props.partaker ? props.partaker.name.mothersSurname : '',
      firstName: props.partaker ? props.partaker.name.firstName : '',
      createdAt: props.partaker ? props.partaker.createdAt : 0,
      phone: props.partaker ? props.partaker.phone ? props.partaker.phone : '' : '', 
      age: props.partaker ? props.partaker.age ? props.partaker.age : '' : '',
      gender: props.partaker ? props.partaker.gender ? props.partaker.gender : 'H' : 'H',
      isChristian: props.partaker ? props.partaker.isChristian ? props.partaker.isChristian : false : false,
      congregateTime: props.partaker ? props.partaker.congregateTime ? props.partaker.congregateTime : '' : '',
      congregationName: props.partaker ? props.partaker.congregationName ? props.partaker.congregationName : '' : '',
      houseId: props.partaker ? props.partaker.houseId ? props.partaker.houseId : undefined : undefined,
      streetName: props.partaker ? props.partaker.hostInfo ? props.partaker.hostInfo.address.streetName : '' : '',
      houseNumber: props.partaker ? props.partaker.hostInfo ? props.partaker.hostInfo.address.houseNumber : '' : '',
      neighborhood: props.partaker ? props.partaker.hostInfo ? props.partaker.hostInfo.address.neighborhood : '' : '',
      zipCode: props.partaker ? props.partaker.hostInfo ? props.partaker.hostInfo.address.zipCode : '' : '',
      lat: props.partaker ? props.partaker.hostInfo ? props.partaker.hostInfo.location.lat : null : null,
      lng: props.partaker ? props.partaker.hostInfo ? props.partaker.hostInfo.location.lng : null : null,
      houseCapacity: props.partaker ? props.partaker.hostInfo ? props.partaker.hostInfo.houseCapacity : '' : '',
      layaways: props.partaker ? props.partaker.hostInfo ? props.partaker.hostInfo.layaways : '' : '',
      timeInFaith: props.partaker ? props.partaker.facilitatorInfo ? props.partaker.facilitatorInfo.timeInFaith : '' : '', 
      cedesCongregateTime: props.partaker ? props.partaker.facilitatorInfo ? props.partaker.facilitatorInfo.cedesCongregateTime : '' : '', 
      
      isHost: props.partaker ? props.partaker.hostInfo ? true : false : false,
      isFacilitator: props.partaker ? props.partaker.facilitatorInfo ? true : false : false,
      basicError: '',
      hostFacilitatorError: '',
      hostError: '',
      facilitatorError: '',
      isMarkerShown: false,
      isOpen: false
    };
  }

  componentDidMount = () => {
    if (this.state.lat && this.state.lng) {
      this.setState(() => ({ isMarkerShown: true }));
    }
  };
  
  onLastNameChange = (e) => {
    const lastName = e.target.value;
    this.setState(() => ({ lastName }));
  };

  onMothersSurnameChange = (e) => {
    const mothersSurname = e.target.value;
    this.setState(() => ({ mothersSurname }));
  };

  onFirstNameChange = (e) => {
    const firstName = e.target.value;
    this.setState(() => ({ firstName }));
  };

  onPhoneChange = (e) => {
    const phone = e.target.value;
    if (!phone || phone.match(/^\d{1,10}$/)) {
      this.setState(() => ({ phone } ));
    }
  };
  
  onAgeChange = (e) => {
    const age = e.target.value;
    if (!age || age.match(/^\d{1,2}$/)) {
      this.setState(() => ({ age } ));
    }
  };

  onGenderChange = (e) => {
    const gender = e.target.value;
    this.setState(() => ({ gender }));
  };

  onIsChristianChange = () => {
    this.setState(() => ({ isChristian: !this.state.isChristian }));
  };

  onCongregateTimeChange = (e) => {
    const congregateTime = e.target.value;
    this.setState(() => ({ congregateTime }));
  };

  onCongregationNameChange = (e) => {
    const congregationName = e.target.value;
    this.setState(() => ({ congregationName }));
  };

  onStreetNameChange = (e) => {
    const streetName = e.target.value;
    this.setState(() => ({ streetName }));
  };

  onHouseNumberChange = (e) => {
    const houseNumber = e.target.value;
    this.setState(() => ({ houseNumber }));
  };

  onNeighborhoodChange = (e) => {
    const neighborhood = e.target.value;
    this.setState(() => ({ neighborhood }));
  };

  onZipCodeChange = (e) => {
    const zipCode = e.target.value;
    this.setState(() => ({ zipCode }));
  };

  onHouseCapacityChange = (e) => {
    const houseCapacity = e.target.value;
    if (!houseCapacity || houseCapacity.match(/^\d{1,2}$/)) {
      this.setState(() => ({ houseCapacity } ));
    }
  };

  onLayawaysChange = (e) => {
    const layaways = e.target.value;
    if (!layaways || layaways.match(/^\d{1,2}$/)) {
      this.setState(() => ({ layaways } ));
    }
  };

  onTimeInFaithChange = (e) => {
    const timeInFaith = e.target.value;
    this.setState(() => ({ timeInFaith }));
  };

  onCedesCongregateTimeChange = (e) => {
    const cedesCongregateTime = e.target.value;
    this.setState(() => ({ cedesCongregateTime }));
  };

  onIsHostChange = () => {
    this.setState(() => ({ isHost: !this.state.isHost }));
  };

  onIsFacilitatorChange = () => {
    this.setState(() => ({ isFacilitator: !this.state.isFacilitator }));
  };

  onMapClick = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    this.setState(() => ({
      lat,
      lng,
      isMarkerShown: true 
    }));
  };

  onMarkerClick = (houseId) => {
    this.setState(() => ({ houseId }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    let error = false;
    // Checking for basic errors
    if (!this.state.lastName || !this.state.mothersSurname || !this.state.firstName
      || !this.state.phone || !this.state.age || !this.state.gender) {
        this.setState(() => ({ basicError: 'Por favor, llene todos los datos básicos' }));
        error = true;
    } else { this.setState(() => ({ basicError: '' })); }
    // Checking for host/facilitator missed error
    if (!this.state.isHost && !this.state.isFacilitator) {
      this.setState(() => ({ hostFacilitatorError: 'Por favor, selecciona alguna opción anfitrión/facilitador' }) );
      error = true;
    } else { this.setState(() => ({ hostFacilitatorError: '' })); }
    // Checking for host errors
    if (this.state.isHost) {
      if (!this.state.streetName || !this.state.houseNumber || !this.state.neighborhood || !this.state.zipCode
        || !this.state.lat || !this.state.lng || !this.state.houseCapacity || !this.state.layaways) {
          this.setState(() => ({ hostError: 'Por favor, llene todos los datos de anfitrión' }));
          error = true;
      } else { this.setState(() => ({ hostError: '' })); } 
    }
    // Checking for facilitator errors
    if (this.state.isFacilitator) {
      if (!this.state.timeInFaith || !this.state.cedesCongregateTime) {
        this.setState(() => ({ facilitatorError: 'Por favor, llene todos los datos de facilitador' }));
        error = true;
      } else { this.setState(() => ({ facilitatorError: '' })); }
    }
    // Submitting host/facilitator
    if (!error) {
      const partaker = {
        folio: this.state.folio,
        name: {
          lastName: this.state.lastName,
          mothersSurname: this.state.mothersSurname,
          firstName: this.state.firstName
        },
        createdAt: this.state.createdAt,
        phone: this.state.phone,
        age: parseInt(this.state.age),
        gender: this.state.gender,
        isChristian: this.state.isChristian,
        congregateTime: this.state.isChristian ? this.state.congregateTime : '',
        congregationName: this.state.isChristian ? this.state.congregationName : '',
      }
      if (this.state.isHost) {
        Object.assign(partaker, {
          hostInfo: {
            address: {
              streetName: this.state.streetName,
              houseNumber: this.state.houseNumber,
              neighborhood: this.state.neighborhood,
              zipCode: this.state.zipCode
            },
            location: {          
              lat: this.state.lat,
              lng: this.state.lng
            },
            houseCapacity: parseInt(this.state.houseCapacity),
            layaways: parseInt(this.state.layaways)
          }
        });
      }
      if (this.state.isFacilitator) {
        Object.assign(partaker, {
          facilitatorInfo: {
            timeInFaith: this.state.timeInFaith,
            cedesCongregateTime: this.state.cedesCongregateTime
          }
        });
        if (this.state.houseId) {
          Object.assign(partaker, {
            houseId: this.state.houseId
          });
        }
      }
      this.props.onSubmit(partaker);
    }
  };

  render () {
    return (
      <div>
        <div className="component__container">
        <h1 className="component__header">Edita los datos de participante</h1>
        {this.state.basicError && <p style={{color: 'red'}}>{this.state.basicError}</p>}
        <form onSubmit={this.onSubmit}>
          <div className="input-group">
            <div className="input-group__item">
              <input 
                type="text"
                placeholder="Nombre(s)"
                className="text-input"
                value={this.state.firstName}
                onChange={this.onFirstNameChange}
              />
            </div>
            <div className="input-group__item">
              <input 
                type="text"
                placeholder="Apellido Paterno"
                className="text-input"
                value={this.state.lastName}
                onChange={this.onLastNameChange}
              />
            </div>
            <div className="input-group__item">
              <input 
                type="text"
                placeholder="Apellido Materno"
                className="text-input"
                value={this.state.mothersSurname}
                onChange={this.onMothersSurnameChange}
              />
            </div>
          </div>
          <div className="input-group">
            <div className="input-group__item">
              <input 
                type="text"
                placeholder="Teléfono"
                className="text-input"
                value={this.state.phone}
                onChange={this.onPhoneChange}
              />
            </div>
            <div className="input-group__item">
              <input 
                type="text"
                placeholder="Edad"
                className="text-input"
                value={this.state.age}
                onChange={this.onAgeChange}
              />
            </div>
            <div className="input-group__item">
              <select
                className="select"
                value={this.state.gender}
                onChange={this.onGenderChange}
              >
                <option value="H">Hombre</option>
                <option value="M">Mujer</option>
              </select>
            </div>
          </div>
          <div className="input-group">
            <div className="input-group__item component__center">
              <div className="tag">¿Es cristiano?</div>
              <input
                id="isChristian"
                type="checkbox"
                className="regular-checkbox big-checkbox"
                defaultValue={this.state.isChristian}
                onChange={this.onIsChristianChange}
                checked={this.state.isChristian}
              /><label for="isChristian"></label>
            </div>
            { this.state.isChristian &&
              <div className="input-group__item">
              <select
              className="select"
              value={this.state.congregateTime}
              onChange={this.onCongregateTimeChange}
              >
              <option value="">--Tiempo de congregarse--</option>
              <option value="1-">Menos de 1 año</option>
              <option value="1-2">De 1 a 2 años</option>
              <option value="3-4">De 3 a 4 años</option>
              <option value="5+">5 años o más</option>
              </select>
              </div>
            }
            { this.state.isChristian &&
              <div className="input-group__item">
                <input 
                type="text"
                placeholder="Congregación"
                className="text-input"
                value={this.state.congregationName}
                onChange={this.onCongregationNameChange}
              />
              </div>
            }
          </div>
          {
            this.state.hostFacilitatorError && 
            <div>
              <p style={{color: 'red'}}>{this.state.hostFacilitatorError}</p>
            </div>
          }
          <div>
            <div className="tag">¿Será anfitrión?</div>
            <input 
              id="isHost"
              type="checkbox"
              className="regular-checkbox big-checkbox"
              defaultValue={this.state.isHost}
              onChange={this.onIsHostChange}
              checked={this.state.isHost}
            /><label for="isHost"></label>
          { this.state.isHost &&
            <div>
              {this.state.hostError && <p style={{color: 'red'}}>{this.state.hostError}</p>}
              <div className="input-group">
                <div className="input-group__item">
                  <input 
                    type="text"
                    placeholder="Calle"
                    className="text-input"
                    value={this.state.streetName}
                    onChange={this.onStreetNameChange}
                  />
                </div>
                <div className="input-group__item">
                  <input 
                      type="text"
                      placeholder="Número"
                      className="text-input"
                      value={this.state.houseNumber}
                      onChange={this.onHouseNumberChange}
                    />
                </div>
                <div className="input-group__item">
                  <input 
                    type="text"
                    placeholder="Colonia"
                    className="text-input"
                    value={this.state.neighborhood}
                    onChange={this.onNeighborhoodChange}
                  />
                </div>
                <div className="input-group__item">
                  <input 
                    type="text"
                    placeholder="Código postal"
                    className="text-input"
                    value={this.state.zipCode}
                    onChange={this.onZipCodeChange}
                  />
                </div>
              </div>
              <div className="input-group">
                <div className="input-group__item">
                  <input 
                    type="text"
                    placeholder="Capacidad de la casa"
                    className="text-input"
                    value={this.state.houseCapacity}
                    onChange={this.onHouseCapacityChange}
                  />
                </div>
                <div className="input-group__item">
                  <input 
                    type="text"
                    placeholder="Lugares apartados"
                    className="text-input"
                    value={this.state.layaways}
                    onChange={this.onLayawaysChange}
                  />
                </div>
              </div>              
            </div>
          }
          </div>
          <div>
            <div>
              <div className="tag">¿Será facilitador?</div>
              <input 
                id="isFacilitator"
                type="checkbox"
                className="regular-checkbox big-checkbox"
                defaultValue={this.state.isFacilitator}
                onChange={this.onIsFacilitatorChange}
                checked={this.state.isFacilitator}
              /><label for="isFacilitator"></label>
            </div>
            { this.state.isFacilitator &&
              <div>
                {this.state.facilitatorError && <p style={{color: 'red'}}>{this.state.facilitatorError}</p>}
                <div className="input-group">
                  <div className="input-group__item">
                    <input 
                      type="text"
                      placeholder="Tiempo en la fe"
                      className="text-input"
                      value={this.state.timeInFaith}
                      onChange={this.onTimeInFaithChange}
                    />
                  </div>
                  <div className="input-group__item">
                    <input 
                      type="text"
                      placeholder="Tiempo en Cedes"
                      className="text-input"
                      value={this.state.cedesCongregateTime}
                      onChange={this.onCedesCongregateTimeChange}
                    />
                  </div>
                </div>
              </div>
            }
          </div>
          <button className="button button__positive">Guardar Participante</button>
          </form> 
          </div>
          { (this.state.isHost) &&
            <div>
            <LocateHouseMap 
            isMarkerShown={this.state.isMarkerShown}
            markerPosition={{lat: this.state.lat, lng: this.state.lng}}
            onMapClick={this.onMapClick}
            />
            </div>
          }
          { (this.state.isFacilitator && !this.state.isHost) &&
            <div>
            <MapWithHouses 
            houseId={this.props.partaker.houseId ? this.props.partaker.houseId : undefined}
            hosts={this.props.hosts}
            onMarkerClick={this.onMarkerClick}
            />
            </div>
          }
      </div>
    );
  }
}