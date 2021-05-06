import React from 'react';

import WXCard from './WXCard';

const CardsList = props => {
  const cards = []
  for (let i = 0; i < props.cardQuantity; i++) {
    cards.push(
      <div key={i} className='col d-flex justify-content-center'>
        <WXCard />
      </div>
    );
  }

  return (
    <div className='cards-list row' >
      {cards}
    </div>
  );
};

export default CardsList;
