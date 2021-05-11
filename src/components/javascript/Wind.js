import React from 'react';

import windDial from '../../images/wind_dial.png';
import windVectorLight from '../../images/wind_vector_light.png';
import windVectorMedium from '../../images/wind_vector_medium.png';
import windVectorStrong from '../../images/wind_vector_strong.png';
import windVectorVariable from '../../images/wind_vector_variable.png';

// Import all images for displaying mean wind direction
import meanWindDirection from './windDirectionImageImport';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Wind extends React.Component {

  windVectorImage = () => {
    if (this.props.direction === 0) {
      return windVectorVariable;
    }
    if (this.props.speed < 11) {
      return windVectorLight;
    }
    if (this.props.speed < 21) {
      return windVectorMedium;
    }
    return windVectorStrong;
  };


  render() {
    return (
      <div>
        <div className="wind">
          <img
            src={this.windVectorImage()}
            className='wind-vector'
            style={{ transform: `rotate(${this.props.direction}deg)` }}
            alt='wind vector'
          />
          <img
            src={meanWindDirection[`${this.props.direction}`]}
            className='wind-mean-direction'
            alt={`mean wind direction of ${this.props.direction} degrees`}
          />
          <img src={windDial} className='wind-dial' alt='wind dial' />
          {/* <p className='mean-speed'>{this.props.speed}<small> kts</small></p> */}
        </div>
      </div>
    );
  }
}

export default Wind;
