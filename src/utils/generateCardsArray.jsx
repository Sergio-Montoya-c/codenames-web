import ImagesList from '../components/Card/images_list';

const generateCardsArray = randomString => {
  const fieldArray = randomString.split("");

  const generateRandomImages = () => {
    let images =  [...ImagesList]
    let randomImages = [];
    for (let index = 0; index < 20; index++) {
      let randomNumber = Math.floor(Math.random() * images.length);
      randomImages.push(...images.splice(randomNumber, 1));
    }
    return randomImages;
  };

  const randomImages = generateRandomImages();

  const fields = fieldArray.map(((field, index) => ({
      selected: false,
      agent: field,
      image: randomImages[index],
    })
  ));

  return {
    cardsArray: fields,
    randomString: randomString,
  };
};

export default generateCardsArray;
