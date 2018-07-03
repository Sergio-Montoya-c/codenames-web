import ImagesList from '../components/Card/images_list';

const generateCardsArray = randomString => {
  const fieldArray = randomString.split("");
  const fields = fieldArray.map(field => ({
      selected: false,
      agent: field,
      image: ImagesList[Math.floor(Math.random() * 3)],
    })
  );
  return {
    cardsArray: fields,
    randomString: randomString,
  }
};

export default generateCardsArray;