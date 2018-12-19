import React from 'react';
import HousesCell from './HousesCell';


const HousesGrid = (props) => {
  return (
    <div className="grid">
      {
        props.hosts.sort((a, b) => { return a.hostInfo.numberLabel - b.hostInfo.numberLabel }).map(host => {
          return (<HousesCell key={host.id} host={host} />);
        })
      }
    </div>
  );
} 

export default HousesGrid;