import React from 'react';

class Clock extends React.Component {
  state = { time: '' };

  componentDidMount() {
    this.setState({ time: new Date().toUTCString().slice(-12, -4) })
    setInterval(() => {
      this.setState({ time: new Date().toUTCString().slice(-12, -4) })
    }, 1000)
  }

  render() {
    return (
      <div className="clock">
        {this.state.time}<small> z</small>
      </div>
    );
  }
}

export default Clock;
