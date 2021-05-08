import React from 'react';

// Import API config function
import CheckWX from '../../api/CheckWX';

// Import Internal Components
import AerodromeSelect from './AerodromeSelect';
import Spinner from './Spinner';
import Wind from './Wind';
import WXCardHeader from './WXCardHeader';

class WXCard extends React.Component {

  state = { size: this.props.size, selectedAerodrome: '', report: {}, errorMessage: '' }

  fetchWXReports = async aerodrome => {
    // Call API to retrieve METAR data for the given aerodrome
    const response = await CheckWX.get(`metar/${aerodrome}/decoded`);
    // Update state with retrieved report
    this.setState({
      selectedAerodrome: aerodrome,
      report: response.data.data[0]
    });
  };

  renderContent = () => {
    if (!this.state.selectedAerodrome) {
      return <p></p>;
    }

    if (this.state.errorMessage && !this.state.report) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.report) {
      console.log(this.state.report)
      return (
        <>
          <WXCardHeader
            icao={this.state.report.icao}
            name={this.state.report.station.name}
            reportTime={this.state.report.observed}
          />
          <Wind direction={this.state.report.wind.degrees} speed={this.state.report.wind.speed_kts} />
        </>
      );
    }

    return <Spinner message='Loading Weather...' />;
  };

  render = () => {
    return (
      <div className={`card card-${this.state.size}`}>
        <AerodromeSelect onChange={this.fetchWXReports} />
        {this.renderContent()}
      </div>
    )
  };
};

export default WXCard;
