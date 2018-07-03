const randomString = startingTeam => {
  const colorsString = `BBBBBBBRRRRRRRDPPPP${startingTeam}`
                       .split('')
                       .sort(() => 0.5 - Math.random() ).join('');
  return colorsString;
}

export default randomString;
