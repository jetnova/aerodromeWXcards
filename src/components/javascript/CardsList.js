import React from 'react';

import WXCard from './WXCard';

const CardsList = props => {

  const cardSize = (quant) => {
    if (quant === '1') { return 'lrg' };
    if (quant === '2') { return 'med' };
    return 'sml';
  };

  const size = cardSize(props.cardQuantity);
  const cards = []

  for (let i = 0; i < props.cardQuantity; i++) {
    cards.push(
      <div key={i} className='col d-flex justify-content-center'>
        <WXCard size={size} />
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
