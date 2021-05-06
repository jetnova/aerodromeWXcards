import React from 'react';

class Slider extends React.Component {
  state = { value: 1 }

  onSliderChange = (event) => {
    this.setState({ value: event.target.value });
  };

  onQuantSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.value);
  };

  render() {
    return (
      <div className='slider'>
        <form onSubmit={this.onQuantSubmit}>
          <p>{this.state.value}</p>
          <input
            type='range'
            value={this.state.value}
            min={this.props.min}
            max={this.props.max}
            onChange={this.onSliderChange}
          />
          {this.props.children}
        </form>
      </div>
    );
  };
};

export default Slider;
