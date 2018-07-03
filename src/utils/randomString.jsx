const randomString = () => {
  const colorsString = `BBBBBBBRRRRRRRDPPPP${Math.floor(Math.random() * 2) ? 'B' : 'R'}`
                       .split('')
                       .sort(() => 0.5 - Math.random() ).join('');
  return colorsString;
}

export default randomString;
