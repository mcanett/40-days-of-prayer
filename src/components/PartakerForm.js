import React from 'react';
import LocateHouseMap from './LocateHouseMap';
import MapWithHouses from './MapWithHouses';

export default class PartakerForm extends React.Component {
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
      
      partakerType: props.partaker ? props.partaker.hostInfo ? 'host' : props.partaker.facilitatorInfo ? 'facilitator' : 'partaker' : 'partaker',
      basicError: '',
      partakerError: '',
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
    this.setState(() => ({ phone }));
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

  onPartakerTypeChange = (e) => {
    const partakerType = e.target.value;
    this.setState(() => ({ partakerType }));
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
    if (this.state.partakerType === 'partaker') {
      if(!this.state.houseId) {
        this.setState(() => ({ partakerError: 'Por favor, eliga una casa' }));
        error = true;
      }
    } else { this.setState(() => ({ partakerError: '' })); }
    // Checking for host errors
    if (this.state.partakerType === 'host') {
      if (!this.state.streetName || !this.state.houseNumber || !this.state.neighborhood || !this.state.zipCode
        || !this.state.lat || !this.state.lng || !this.state.houseCapacity || !this.state.layaways) {
          this.setState(() => ({ hostError: 'Por favor, llene todos los datos de anfitrión' }));
          error = true;
      } else { this.setState(() => ({ hostError: '' })); } 
    }
    // Checking for facilitator errors
    if (this.state.partakerType === 'facilitator') {
      if (!this.state.timeInFaith || !this.state.cedesCongregateTime) {
        this.setState(() => ({ facilitatorError: 'Por favor, llene todos los datos de facilitador' }));
        error = true;
      } else { this.setState(() => ({ facilitatorError: '' })); }
    }
    // Submitting partaker
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
        houseId: this.state.houseId ? this.state.houseId : '',
      }
      if (this.state.partakerType === 'host') {
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
      if (this.state.partakerType === 'facilitator') {
        Object.assign(partaker, {
          facilitatorInfo: {
            timeInFaith: this.state.timeInFaith,
            cedesCongregateTime: this.state.cedesCongregateTime
          }
        });
      }
      this.props.onSubmit(partaker);
    }
  };

  render () {
    return (
      <div>
        {this.state.basicError && <p style={{color: 'red'}}>{this.state.basicError}</p>}
        <form onSubmit={this.onSubmit}>
          <div>
            <select
              value={this.state.partakerType}
              onChange={this.onPartakerTypeChange}
            >
              <option value="partaker">Participante</option>
              <option value="host">Anfitrión</option>
              <option value="facilitator">Facilitador</option>
            </select>
          </div>
          <div>
            <input 
              type="text"
              placeholder="Nombre(s)"
              autoFocus
              value={this.state.firstName}
              onChange={this.onFirstNameChange}
            />
            <input 
              type="text"
              placeholder="Apellido Paterno"
              autoFocus
              value={this.state.lastName}
              onChange={this.onLastNameChange}
            />
            <input 
              type="text"
              placeholder="Apellido Materno"
              autoFocus
              value={this.state.mothersSurname}
              onChange={this.onMothersSurnameChange}
            />
          </div>
          <div>
            <input 
              type="text"
              placeholder="Teléfono"
              autoFocus
              value={this.state.phone}
              onChange={this.onPhoneChange}
            />
            <input 
              type="text"
              placeholder="Edad"
              value={this.state.age}
              onChange={this.onAgeChange}
            />
            <select
              value={this.state.gender}
              onChange={this.onGenderChange}
            >
              <option value="H">Hombre</option>
              <option value="M">Mujer</option>
            </select>
          </div>
          <div>
            ¿Eres cristiano?
            <input 
              type="checkbox"
              defaultValue={this.state.isChristian}
              onChange={this.onIsChristianChange}
              checked={this.state.isChristian}
            />
            { this.state.isChristian &&
            <select
              value={this.state.congregateTime}
              onChange={this.onCongregateTimeChange}
            >
              <option value="">--Tiempo de congregarse--</option>
              <option value="1-">Menos de 1 año</option>
              <option value="1-2">De 1 a 2 años</option>
              <option value="3-4">De 3 a 4 años</option>
              <option value="5+">5 años o más</option>
            </select>
            }
            { this.state.isChristian &&
            <input 
              type="text"
              placeholder="Congregación"
              value={this.state.congregationName}
              onChange={this.onCongregationNameChange}
            />
            }
          </div>
          { this.state.partakerType === 'host' &&
            <div>
              {this.state.hostError && <p style={{color: 'red'}}>{this.state.hostError}</p>}
              <div>
                <input 
                  type="text"
                  placeholder="Calle"
                  value={this.state.streetName}
                  onChange={this.onStreetNameChange}
                />
                <input 
                  type="text"
                  placeholder="Número"
                  value={this.state.houseNumber}
                  onChange={this.onHouseNumberChange}
                />
                <input 
                  type="text"
                  placeholder="Colonia"
                  value={this.state.neighborhood}
                  onChange={this.onNeighborhoodChange}
                />
                <input 
                  type="text"
                  placeholder="Código postal"
                  value={this.state.zipCode}
                  onChange={this.onZipCodeChange}
                />
              </div>
              <div>
                <input 
                  type="text"
                  placeholder="Capacidad de la casa"
                  value={this.state.houseCapacity}
                  onChange={this.onHouseCapacityChange}
                />
                <input 
                  type="text"
                  placeholder="Lugares apartados"
                  value={this.state.layaways}
                  onChange={this.onLayawaysChange}
                />
              </div>
              <LocateHouseMap 
                isMarkerShown={this.state.isMarkerShown}
                markerPosition={{lat: this.state.lat, lng: this.state.lng}}
                onMapClick={this.onMapClick}
              />
            </div>
          }
          { this.state.partakerType === 'facilitator' &&
            <div>
              {this.state.facilitatorError && <p style={{color: 'red'}}>{this.state.facilitatorError}</p>}
              <div>
                <input 
                  type="text"
                  placeholder="Tiempo en la fe"
                  value={this.state.timeInFaith}
                  onChange={this.onTimeInFaithChange}
                />
                <input 
                  type="text"
                  placeholder="Tiempo en Cedes"
                  value={this.state.cedesCongregateTime}
                  onChange={this.onCedesCongregateTimeChange}
                />
              </div>
            </div>
          }
          { (this.state.partakerType === 'partaker' || this.state.partakerType === 'facilitator') &&
            <div>
              {this.state.partakerError && <p style={{color: 'red'}}>{this.state.partakerError}</p>}
              <MapWithHouses 
                houseId={this.props.partaker.houseId ? this.props.partaker.houseId : undefined}
                hosts={this.props.hosts}
                onMarkerClick={this.onMarkerClick}
              />
            </div>
          }
          <button>Guardar Participante</button>
        </form> 
      </div>
    );
  }
}