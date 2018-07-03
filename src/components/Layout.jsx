import React, {Component} from 'react';
import ImagesList from './Card/images_list';
import getURLParam from '../utils/getURLParam';
import Card from './Card'
import Card from './Card';
import {randomString} from '../utils';

const generateCardsArray = randomString => {
  const fieldArray = randomString.split("");
  return fieldArray.map(field => ({
      selected: false,
      agent: field,
      image: ImagesList[Math.floor(Math.random() * 3)],
    })
  );
};

class Layout extends Component {
  state = {
    cardsArray: getURLParam('agent-card') ? generateCardsArray(getURLParam('agent-card')) : generateCardsArray('BBBBBBBBRRRRRRRPPPPD'),
  };

  handleRevealCard = (key) => {
    const {cardsArray} = this.state;
    cardsArray[key] = {...cardsArray[key], selected: true};
    this.setState({
      cardsArray: cardsArray,
    });
  };

  render () {
    const {cardsArray, randomString} = this.state;
    return (
      <div className="layout">
        {cardsArray.map((card, index) => {
            return <Card key={index} index={index} card={card} handleRevealCard={this.handleRevealCard} />
          }
        )}
      </div>
    )
  }
};

export default Layout;
