import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Spinner = props => {
  return (
    <div className='loading-container' >
      <FontAwesomeIcon className='spinner' icon={['far', 'spinner-third']} size='3x' />
      <div>{props.message}</div>
    </div>
  );
}

Spinner.defaultProps = {
  message: 'Loading...'
};

export default Spinner;
