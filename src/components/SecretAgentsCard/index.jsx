import React from 'react';
import {generateCardsArray} from '../../utils';
import Card from '../Card';

const SecretAgentsCard = () => (
  <div className="secret-agent-grid layout">
    <div className="cards-container">
      {generateCardsArray('BBBBBBBBRRRRRRRPPPPD').cardsArray.map((card, index) => {
          return <Card key={index} index={index} card={card} handleRevealCard={this.handleRevealCard} />
        })}
    </div>
  </div>
);

export default SecretAgentsCard;