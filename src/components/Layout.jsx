import React, {Component} from 'react';
import getURLParam from '../utils/getURLParam';
import Header from './Header';
import Card from './Card'
import {randomString} from '../utils';
import {generateCardsArray} from '../utils';

class Layout extends Component {
  state = getURLParam('agent-card') ? generateCardsArray(getURLParam('agent-card')) : generateCardsArray(randomString());

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
        <Header randomString={randomString} />
        <div className="cards-container">
          {cardsArray.map((card, index) => {
              return <Card key={index} index={index} card={card} handleRevealCard={this.handleRevealCard} />
            }
          )}
        </div>
      </div>
    )
  }
};

export default Layout;
