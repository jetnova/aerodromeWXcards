import React from 'react';

import windDial from '../../images/wind_dial.png';
import windVector from '../../images/wind_vector.png';
import windVectorVariable from '../../images/wind_vector_variable.png';

class Wind extends React.Component {

  render() {
    return (
      <div>
        <div className="wind">
          <img
            src={this.props.direction > 0 ? windVector:windVectorVariable}
            className='wind-vector'
            style={{ transform: `rotate(${this.props.direction}deg)` }}
            alt='wind vector'
          />
          <img src={windDial} className='wind-dial' alt='wind dial' />
        </div>
        <p>{this.props.direction}&deg; {this.props.speed}kts</p>
      </div>
    );
  }
}

export default Wind;
