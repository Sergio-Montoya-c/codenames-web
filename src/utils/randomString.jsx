const randomString = startingTeam => {
  const teamCardsNumber = 7;

  const colorCards = {
    blue: startingTeam === 'blue' ? teamCardsNumber + 1 : teamCardsNumber,
    red:  startingTeam === 'red' ? teamCardsNumber + 1 : teamCardsNumber,
    green: 4,
    dark: 1
  };

  const colorValue = (value) => {
    switch(value){
      case 0:
        return 'B';
        break;
      case 1:
        return 'R';
        break;
      case 2:
        return 'G';
        break;
      case 3:
        return 'D';
        break;
    }
  };

  let cardsCounter = 20
  const colorCardsKeys = Object.keys(colorCards);
  let colorsString = '';

  while(cardsCounter > 0){
    let random = Math.floor(Math.random() * 4);
    if (colorCards[colorCardsKeys[random]] > 0){
      cardsCounter--;
      colorCards[colorCardsKeys[random]]--;
      colorsString += colorValue(random);
    }
  }

  return colorsString;
}

export default randomString;
