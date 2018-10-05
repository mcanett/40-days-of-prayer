import React from 'react';
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
      registeredAt: props.partaker ? props.partaker.registeredAt : undefined,
      registeredBy: props.partaker ? props.partaker.registeredBy : undefined,

      phone: props.partaker ? props.partaker.phone ? props.partaker.phone : '' : '', 
      age: props.partaker ? props.partaker.age ? props.partaker.age : '' : '',
      gender: props.partaker ? props.partaker.gender ? props.partaker.gender : 'H' : 'H',
      isChristian: props.partaker ? props.partaker.isChristian ? props.partaker.isChristian : false : false,
      congregateTime: props.partaker ? props.partaker.congregateTime ? props.partaker.congregateTime : '' : '',
      congregartionName: props.partaker ? props.partaker.congregartionName ? props.partaker.congregartionName : '' : '',
      houseId: props.partaker ? props.partaker.houseId ? props.partaker.houseId : '' : '',
      error: ''
    };
  }

  handleChange = (e) => {
    const control = e.target.id;
    const value = e.target.value;
    this.setState(() => ({ [control]: value }));
  }

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

  onIsChristianChange = () => {
    this.setState(() => ({ isChristian: !this.state.isChristian }));
  };

  onMarkerClick = (houseId) => {
    this.setState(() => ({ houseId }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    let error = false;
    // Checking for basic errors
    console.log(this.state);
    if (!this.state.lastName || !this.state.mothersSurname || !this.state.firstName
      || !this.state.phone || !this.state.age || !this.state.gender) {
        this.setState(() => ({ error: 'Por favor, llene todos los datos básicos' }));
        error = true;
    } else if (!this.state.houseId) {
        this.setState(() => ({ error: 'Por favor, seleccione una casa en el mapa' }));
        error = true;
    } else { 
      this.setState(() => ({ error: '' }));
      error = false;
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
        houseId: this.state.houseId ? this.state.houseId : '',
        registeredAt: this.state.registeredAt,
        registeredBy: this.state.registeredBy
      }
      this.props.onSubmit(partaker);
    }
  };

  render () {
    return (
      <div>
        <div className="component__container">
        <h1 className="component__header">Edita los datos de participante</h1>
        {this.state.error && <p style={{color: 'red'}}>{this.state.error}</p>}
          <form onSubmit={this.onSubmit}>
            <div className="input-group">
              <div className="input-group__item">
                <input
                  id="firstName" 
                  type="text"
                  placeholder="Nombre(s)"
                  className="text-input"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-group__item">
                <input 
                  id="lastName"
                  type="text"
                  placeholder="Apellido Paterno"
                  className="text-input"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-group__item">
                <input
                  id="mothersSurname"
                  type="text"
                  placeholder="Apellido Materno"
                  className="text-input"
                  value={this.state.mothersSurname}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="input-group">
              <div className="input-group__item">
                <input
                  id="phone"
                  type="text"
                  placeholder="Teléfono"
                  className="text-input"
                  value={this.state.phone}
                  onChange={this.onPhoneChange}
                />
              </div>
              <div className="input-group__item">
                <input
                  id="age"
                  type="text"
                  placeholder="Edad"
                  className="text-input"
                  value={this.state.age}
                  onChange={this.onAgeChange}
                />
              </div>
              <div className="input-group__item">
                <select
                  id="gender"
                  className="select"
                  value={this.state.gender}
                  onChange={this.handleChange}
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
                /><label htmlFor="isChristian"></label>
              </div>
              { this.state.isChristian &&
                <div className="input-group__item">
                <select
                  id="congregateTime"
                  className="select"
                  value={this.state.congregateTime}
                  onChange={this.handleChange}
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
                    id="congragationName"
                    type="text"
                    placeholder="Congregación"
                    className="text-input"
                    value={this.state.congregationName}
                    onChange={this.handleChange}
                  />
                </div>
              }
            </div>
            <button className="button button__positive">Guardar Participante</button>
          </form> 
        </div>
        <div>
          <MapWithHouses 
            houseId={this.props.partaker.houseId ? this.props.partaker.houseId : undefined}
            hosts={this.props.hosts}
            onMarkerClick={this.onMarkerClick}
          />
        </div>
      </div>
    );
  }
}