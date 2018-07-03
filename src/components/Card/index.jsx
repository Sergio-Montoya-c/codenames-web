import React from 'react';
import BlueAgent from '../../assets/images/blueAgent.png';
import RedAgent from '../../assets/images/redAgent.png';
import DarkAgent from '../../assets/images/darkAgent.png';
import Peasant from '../../assets/images/peasant.png';

const getAgentImage = agentString => {
  switch (agentString) {
    case 'R': return RedAgent;
    case 'B': return BlueAgent;
    case 'P': return Peasant;
    case 'D': return DarkAgent;
  }
}

const Card = ({handleRevealCard, card:  {selected, image, agent}, index}) => (
  <div className="card-container" onClick={() => handleRevealCard(index)}>
    <div className={`card ${selected === true && 'selected'}`}>
      <div className="card-image">
        <img src={image} />
      </div>
      <div className="card-agent">
        <img src={getAgentImage(agent)} />
      </div>
    </div>
  </div>
);

export default Card;