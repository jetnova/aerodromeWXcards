import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Socials extends React.Component {

  renderContent = () => {
    const content = this.props.profiles.map((profile, index) => {
      return (
        <a
          key={index}
          href={profile.href}
          rel='noreferrer'
          target='_blank'
        >
          <FontAwesomeIcon icon={['fab', `${profile.icon}`]} size={'2x'} />
        </a>
      )
    });

    return content;
  };


  render() {
    return (
      <div className='socials'>
        {this.renderContent()}
      </div>
    );
  };
};

export default Socials;
