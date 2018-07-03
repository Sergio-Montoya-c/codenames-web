const getUrlParam = param => {
  const query = window.location.search.substring(1);
  const vars = query.split('&');
  let query_string = {};
  vars.forEach(element => {
    const pair = element.split('=');
    const key = decodeURIComponent(pair[0]);
    const value = decodeURIComponent(pair[1]);
    query_string[key] = value;
  });
  return query_string[param];
};

export default getUrlParam;