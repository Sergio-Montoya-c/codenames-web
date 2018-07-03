import React from 'react';
import CardAgent from '../../assets/images/blueAgent.png';



const Card = ({handleRevealCard, card:  {selected, image}, index}) => (
  <div className="card-container" onClick={() => handleRevealCard(index)}>
    <div className={`card ${selected === true && 'selected'}`}>
      <div className="card-image">
        <img src={image} />
      </div>
      <div className="card-agent">
        <img src={CardAgent} />
      </div>
    </div>
  </div>
);

export default Card;