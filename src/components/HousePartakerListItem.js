import React from 'react';
import { Link } from 'react-router-dom';
import { BlueEditIcon } from './Icons';

export default class PartakerListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { count, name, id, folio, phone } = this.props;
    const fullName = `${name.firstName} ${name.lastName} ${name.mothersSurname}`;
    return (
      <div className="list-item">
        <div className="list-item__l">
          <h3>
            {count}. {fullName}
          </h3>
        </div>
        <div className="list-item__m">
          <h3>
            {folio}
          </h3>
        </div>
        <div className="list-item__m">
          <h3>
            {phone}
          </h3>
        </div>
        <div className="list-item__xs">
          <h3 className="not-printable">
            <Link to={{
              pathname: `/edit/${id}`,
              search: '',
              state: { detail: 'p' }
            }}><BlueEditIcon /></Link>
          </h3>
        </div>
      </div>
    );
  }
}