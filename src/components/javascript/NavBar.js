import React from 'react';

const NavBar = props => {

  return (
    <nav>
      {props.children}
    </nav>
  );
};

export default NavBar;
