import React from 'react';

import aerodromes from './Aerodromes';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class AerodromeSelect extends React.Component {
  state = { selected: '', expanded: false };

  onSelectChange = event => {
    this.setState({ selected: event.target.value });
    this.toggleSelectVisibility();
    if (event.target.value) { this.props.onChange(event.target.value) };
  };

  toggleSelectVisibility = () => {
    this.setState({ expanded: !this.state.expanded })
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.toggleSelectVisibility();
    }, 600);
  };

  render() {
    const options = aerodromes.map(({ ICAO, name }) => {
      return <option key={ICAO} value={ICAO}>{`${ICAO} - ${name}`}</option>
    });

    return (
      <div className='select-holder'>
        <div className={this.state.expanded ? 'select-toggler' : 'select-toggler curved-corner-right'}>
          <div className={this.state.expanded ? 'point-left' : 'point-right'}>
            <FontAwesomeIcon
              icon={['far', 'chevron-square-right']}
              size={'2x'}
              onClick={this.toggleSelectVisibility}
            />
          </div>
        </div>
        <div className={this.state.expanded ? 'select-expansion-area curved-corner-right' : 'select-expansion-area contracted'}>
          <select value={this.state.selected} onChange={this.onSelectChange} >
            <option value=''>--Please choose an aerodrome--</option>
            {options}
          </select>
        </div>
      </div>
    );
  };
};

export default AerodromeSelect;
