import React from 'react';
import { generate, exist } from '../utils/folio';

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
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <select
            value={this.state.prefix}
            onChange={this.onPrefixChange}
          >
            <option value="P">Pagado</option>
            <option value="D">Donado</option>
            <option value="A">Autorizado</option>
          </select>
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
            value={this.state.mothersSurname}
            onChange={this.onMothersSurnameChange}
          />
          <input 
            type="text"
            placeholder="Nombre(s)"
            value={this.state.firstName}
            onChange={this.onFirstNameChange}
          />
          <button>Crear folio</button>
        </form> 
      </div>
    );
  }
}