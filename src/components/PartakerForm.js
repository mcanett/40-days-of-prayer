import React from 'react';

export default class PartakerForm extends React.Component {
  constructor(props) {
    super(props);

    /*const defaultHostInfo = {
      address: {
        streetName: props.partaker ? props.partaker.hostInfo ? props.partaker.hostInfo.address.streetName : '' : '', // calle
        houseNumber: props.partaker ? props.partaker.hostInfo ? props.partaker.hostInfo.address.houseNumber : '' : '', // numero
        neighborhood: props.partaker ? props.partaker.hostInfo ? props.partaker.hostInfo.address.neighborhood : '' : '', // colonia
        zipCode: props.partaker ? props.partaker.hostInfo ? props.partaker.hostInfo.address.zipCode : '' : ''  // codigo postal
      },
      location: {
        x: props.partaker ? props.partaker.hostInfo ? props.partaker.hostInfo.location.x : '' : '', // cordenada x
        y: props.partaker ? props.partaker.hostInfo ? props.partaker.hostInfo.location.y : '' : ''  // coordenada y
      },
      houseCapacity: props.partaker ? props.partaker.hostInfo ? props.partaker.hostInfo.houseCapacity : 0 : 0,// cap. de la casa
      layaways: props.partaker ? props.partaker.hostInfo ? props.partaker.hostInfo.layaways : 0 : 0  // num. de apartados
    };

    const defaultFacilitatorInfo = {
      timeInFaith: props.partaker ? props.partaker.facilitatorInfo ? props.partaker.facilitatorInfo.timeInFaith : '' : '', // Tiempo en la fe/de conocer a Dios
      cedesCongregateTime: props.partaker ? props.partaker.facilitatorInfo ? props.partaker.facilitatorInfo.cedesCongregateTime : '' : '' // Tiempo de congregarse en Cedes
    };*/

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
      houseId: props.partaker ? props.partaker.houseId ? props.partaker.houseId : '' : '',
      // hostInfo: props.partaker ? props.partaker.hostInfo ? props.partaker.hostInfo : defaultHostInfo : defaultHostInfo,
      streetName: props.partaker ? props.partaker.hostInfo ? props.partaker.hostInfo.address.streetName : '' : '',
      houseNumber: props.partaker ? props.partaker.hostInfo ? props.partaker.hostInfo.address.houseNumber : '' : '',
      neighborhood: props.partaker ? props.partaker.hostInfo ? props.partaker.hostInfo.address.neighborhood : '' : '',
      zipCode: props.partaker ? props.partaker.hostInfo ? props.partaker.hostInfo.address.zipCode : '' : '',
      x: props.partaker ? props.partaker.hostInfo ? props.partaker.hostInfo.location.x : '' : '',
      y: props.partaker ? props.partaker.hostInfo ? props.partaker.hostInfo.location.y : '' : '',
      houseCapacity: props.partaker ? props.partaker.hostInfo ? props.partaker.hostInfo.houseCapacity : 0 : 0,// cap. de la casa
      layaways: props.partaker ? props.partaker.hostInfo ? props.partaker.hostInfo.layaways : 0 : 0,  // num. de apartados
      // facilitatorInfo: props.partaker ? props.partaker.facilitatorInfo ? props.partaker.facilitatorInfo : defaultFacilitatorInfo : defaultFacilitatorInfo,
      timeInFaith: props.partaker ? props.partaker.facilitatorInfo ? props.partaker.facilitatorInfo.timeInFaith : '' : '', // Tiempo en la fe/de conocer a Dios
      cedesCongregateTime: props.partaker ? props.partaker.facilitatorInfo ? props.partaker.facilitatorInfo.cedesCongregateTime : '' : '', // Tiempo de congregarse en Cedes
      
      partakerType: props.partaker ? props.partaker.hostInfo ? 'host' : props.partaker.facilitatorInfo ? 'facilitator' : 'partaker' : 'partaker',
      error: '',
      hostError: '',
      facilitatorError: ''
    };
  }
  
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
    if (!age || age.match(/^\d{1,}(\.\d{0,2})?$/)) {
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
    this.setState(() => ({ houseCapacity }));
  };

  onLayawaysChange = (e) => {
    const layaways = e.target.value;
    this.setState(() => ({ layaways }));
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

  onSubmit = (e) => {
    e.preventDefault();
    //|| !this.state.houseId || !this.state.hostInfo || !this.state.facilidator
    if (!this.state.lastName || !this.state.mothersSurname || !this.state.firstName
      || !this.state.phone || !this.state.age || !this.state.gender) {
      this.setState(() => ({ error: 'Por favor, llene todos los datos' }));
    } else {
      this.setState(() => ({ error: '' }));
      const partaker = {
        folio: this.state.folio,
        name: {
          lastName: this.state.lastName,
          mothersSurname: this.state.mothersSurname,
          firstName: this.state.firstName
        },
        createdAt: this.state.createdAt,
        phone: this.state.phone,
        age: this.state.age,
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
              x: this.state.x,
              y: this.state.y
            },
            houseCapacity: this.state.houseCapacity,
            layaways: this.state.layaways
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
        {this.state.error && <p style={{color: 'red'}}>{this.state.error}</p>}
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
            <input 
              type="text"
              placeholder="Nombre(s)"
              autoFocus
              value={this.state.firstName}
              onChange={this.onFirstNameChange}
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
          </div>
          }
          { this.state.partakerType === 'facilitator' &&
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
          }
          <button>Guardar Participante</button>
        </form> 
      </div>
    );
  }
}