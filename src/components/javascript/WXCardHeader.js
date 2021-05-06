import React from 'react';
import ReportValidityMeter from './ReportValidityMeter';

const WXCardHeader = props => {
  return (
    <div className='wx-card-header'>
      <h3><big>{props.icao}</big> - <small>{props.name}</small></h3>
      <ReportValidityMeter reportTime={props.reportTime} />
    </div>
  );
};

export default WXCardHeader;
