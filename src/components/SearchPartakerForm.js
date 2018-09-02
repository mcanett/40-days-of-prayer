import React from 'react';

export default class SearchPartakerForm extends React.Component {
  constructor(props){
    super(props);
  }
  state = {
    partakerText: ''
  };

  onPartakerChange = (e) => {
    const partakerText = e.target.value;
    this.setState(() => ({ partakerText }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    const partakerText = this.state.partakerText;
    this.props.onSearch(partakerText)
    this.setState(() => ({ partakerText: '' }));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Folio / Nombre"
            className="text-input"
            value={this.state.partakerText}
            onChange={this.onPartakerChange}
            autoFocus={true}
          />
          <button className="button button__positive">Buscar</button>
        </form>
      </div>
    );
  }
}