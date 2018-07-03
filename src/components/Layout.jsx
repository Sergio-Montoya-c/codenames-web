import React, {Component} from 'react';
import ImagesList from './Card/images_list';
import Card from './Card';
import {randomString} from '../utils';

class Layout extends Component {
  state = {
    cardsArray: Array.from(Array(20)).map(element => (
        {
          selected: false,
          image: ImagesList[Math.floor(Math.random() * 3)],
        }
      )),
    randomString: randomString('B'),
  };

  handleRevealCard = (key) => {
    const {cardsArray} = this.state;
    cardsArray[key] = {...cardsArray[key], selected: true};
    this.setState({
      cardsArray: cardsArray,
    });
  };

  render () {
    const {cardsArray} = this.state;
    return (
      <div className="layout">
        {cardsArray.map((card, index) => {
          console.log(card);
          return <Card key={index} index={index} card={card} handleRevealCard={this.handleRevealCard} />
        }
        )}
      </div>
    )
  }
};

export default Layout;
