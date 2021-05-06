import React from 'react';

// const ReportValidityMeter = props => {

// };

class ReportValidityMeter extends React.Component {

  state = { reportTime: this.props.reportTime }

  componentDidMount = () => {
    this.calculateReportAge();
    setInterval(() => {
      this.calculateReportAge();
    }, 60000);
  };

  calculateReportAge = () => {
    const timeNow = new Date();
    this.setState({ reportAge: Math.round((timeNow - new Date(this.state.reportTime)) / 60000) });
  };

  render = () => {
    return (
      <div className='report-validity'>
        <h5><span className={this.state.reportAge > 30 ? 'more-than-30' : ''}>{this.state.reportAge}</span>{this.state.reportAge === 1 ? ' min' : ' mins'} old</h5>
        <progress value={this.state.reportAge} max='30'>{this.state.reportAge}mins</progress>
      </div>
    );
  };
};

export default ReportValidityMeter;
