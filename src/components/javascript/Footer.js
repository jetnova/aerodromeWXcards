import React from 'react';

const Footer = props => {
  return (
    <footer className='d-flex align-items-center'>
      {props.children}
    </footer>
  );
};

export default Footer;
