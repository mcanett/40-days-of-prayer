import React from 'react';

export default class PartakerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lastName: props.partaker ? props.partaker.name.lastName : '',
      mothersSurname: props.partaker ? props.partaker.name.mothersSurname : '',
      firstName: props.partaker ? props.partaker.name.firstName : '',
      phone: props.partaker ? props.partaker.phone ? props.partaker.phone : '' : '', 
      age: props.partaker ? props.partaker.age ? props.partaker.age : '' : '',
      gender: props.partaker ? props.partaker.gender ? props.partaker.gender : '' : '',
      isChristian: props.partaker ? props.partaker.isChristian ? props.partaker.isChristian : '' : '',
      congregateTime: props.partaker ? props.partaker.congregateTime ? props.partaker.congregateTime : '' : '',
      congregartionName: props.partaker ? props.partaker.congregartionName ? props.partaker.congregartionName : '' : '',
      houseId: props.partaker ? props.partaker.houseId ? props.partaker.houseId : '' : '',
      error: ''
    };
  }
  
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount } ));
    }
  };

  onDateChange = (createdAt) => {
    if (createdAt){
      this.setState(() => ({ createdAt }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide description and amount.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };

  render () {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <input 
          type="text"
          placeholder="Description"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <input 
          type="text"
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          value={this.state.note}
          onChange={this.onNoteChange}
          placeholder="Add a note for your expense (Optional)">
        </textarea>
      </div>
    );
  }
}