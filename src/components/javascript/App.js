import React from 'react';

// Internal Component Imports
import Button from './Button';
import CardsList from './CardsList';
import Clock from './Clock';
import Footer from './Footer';
import NavBar from './NavBar';
import Modal from 'react-modal';
import Slider from './Slider';
import Socials from './Socials';

import logo from '../../images/logo.png';

class App extends React.Component {
  // State object holds the quantity of cards the user has selected to have viewed at any time
  state = { cardQuantity: 0, showModal: true }

  // Callback function to change the card-quantity state property and commit closure of the modal
  onCardQuantitySubmit = (quantity) => {
    this.setState({ cardQuantity: quantity, showModal: false });
  };

  render() {
    return (
      <>
        <NavBar>
          <img src={logo} alt='aerodrome weather cards logo' />
          <Clock />
        </NavBar>
        <CardsList cardQuantity={this.state.cardQuantity} />
        <Modal
          isOpen={this.state.showModal}
          closeTimeoutMS={600}
        >
          <p className='text-center'>
            Welcome to aerodromeWXcards.com
          <br />
            Please select the number of aerodromes to simultaneously view weather for...
          </p>
          <Slider min='1' max='4' onSubmit={this.onCardQuantitySubmit} >
            <Button text="Let's Go" />
          </Slider>
        </Modal>
        <Footer>
          <Socials
            profiles={[
              { href: 'https://github.com/jetnova', icon: 'github-square' },
              { href: 'https://www.linkedin.com/in/mattsdev/', icon: 'linkedin' }
            ]}
          />
        </Footer>
      </>
    );
  };
};

export default App;
