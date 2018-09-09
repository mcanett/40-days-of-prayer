import React from 'react';

export default class PartakerNameForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prefix: 'P',
      lastName: props.partaker ? props.partaker.lastName :'',
      mothersSurname: props.partaker ? props.partaker.mothersSurname : '',
      firstName: props.partaker ? props.partaker.firstName :'',
    };
  }
  
  onPrefixChange = (e) => {
    const prefix = e.target.value;
    this.setState(() => ({ prefix }));
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

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.lastName || !this.state.mothersSurname || !this.state.firstName) {
      this.setState(() => ({ error: 'Por favor, provee el nombre completo' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        prefix: this.state.prefix,
        lastName: this.state.lastName,
        mothersSurname: this.state.mothersSurname,
        firstName: this.state.firstName
      });
      this.setState(() => ({
        lastName: '',
        mothersSurname: '',
        firstName: '' 
      }));
    }
  };

  render () {
    return (
      <div>
        {this.state.error && <p style={{color: 'red'}}>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <div className="input-group">
            <div className="input-group__item">
              <select
                className="select"
                value={this.state.prefix}
                onChange={this.onPrefixChange}
              >
                <option value="P">Pagado</option>
                <option value="D">Donado</option>
                <option value="A">Autorizado</option>
              </select>
            </div>
            <div className="input-group__item">
              <input 
                className="text-input"
                type="text"
                placeholder="Nombre(s)"
                value={this.state.firstName}
                onChange={this.onFirstNameChange}
              />
            </div>
            <div className="input-group__item">
              <input
                className="text-input"
                type="text"
                placeholder="Apellido Paterno"
                autoFocus
                value={this.state.lastName}
                onChange={this.onLastNameChange}
              />
            </div>
            <div className="input-group__item">
              <input
                className="text-input"
                type="text"
                placeholder="Apellido Materno"
                value={this.state.mothersSurname}
                onChange={this.onMothersSurnameChange}
              />
            </div>
          </div>
          <div className="input-group">
            <div className="input-group__item">
              <button className="button button__positive">Crear folio</button>
            </div>
          </div>
        </form> 
      </div>
    );
  }
}