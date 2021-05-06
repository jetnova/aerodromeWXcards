import React from 'react';

import windDial from '../../images/wind_dial.png';
import windVector from '../../images/wind_vector.png';

class Wind extends React.Component {

  renderedWind = () => {
    if (this.props.direction > 0) {
      return (
        <img
          src={windVector}
          className='wind-vector'
          style={{ transform: `rotate(${this.props.direction}deg)` }}
          alt='wind vector'
        />
      );
    }
    return;
  };

  render() {
    return (
      <div>
        <div className="wind">
          <img src={windDial} className='wind-dial' alt='wind dial' />
          {this.renderedWind()}
        </div>
        <p>{this.props.direction}&deg; {this.props.speed}kts</p>
      </div>
    );
  }
}

export default Wind;
