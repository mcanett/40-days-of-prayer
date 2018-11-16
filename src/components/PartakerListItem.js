import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { BlueEditIcon } from './Icons';

export default class PartakerListItem extends React.Component {
  constructor(props) {
    super(props);
    const { name, createdAt, hasHandbook } = props;
    
    this.state = {
      hasHandbook: hasHandbook ? true : false,
      fullName: `${name.lastName} ${name.mothersSurname} ${name.firstName}`,
      formattedDate: moment(createdAt).format('DD/MM/YY')
    }
  }

  onHasHandbookChange = () => {
    this.setState(() => ({ hasHandbook: !this.state.hasHandbook }));
    this.props.setHasHandbook(this.props.id, !this.state.hasHandbook);
  }


  render() {
    const { count, id, folio, hostInfo } = this.props;
    return (
      <div className="list-item">
        <div className="list-item__l">
          <h3>
            {count}. {this.state.fullName}
          </h3>
        </div>
        <div className="list-item__s">
          <h3>
            {folio}
          </h3>
        </div>
        <div className="list-item__s not-printable">
          <h3>
            {this.state.formattedDate}
          </h3>
        </div>
        <div className="list-item__xs not-printable">
          { folio.includes('A') ? 'N/A' : <div className="input-group__item">
            <input
              id={count}
              type="checkbox"
              className="regular-checkbox big-checkbox"
              onChange={this.onHasHandbookChange}
              defaultValue={this.state.hasHandbook}
              checked={this.state.hasHandbook}
              /><label htmlFor={count}></label>
          </div> }
        </div>
        <div className="list-item__s">
          <h3 className="not-printable">
            { hostInfo !== undefined  ? 
              <Link to={{
              pathname: `/edit/${id}`,
              search: '',
              state: { detail: 'hf' }
            }}><BlueEditIcon /></Link> 
            : <Link to={{
              pathname: `/edit/${id}`,
              search: '',
              state: { detail: 'p' }
            }}><BlueEditIcon /></Link> }
          </h3>
        </div>
      </div>
    );
  }
}