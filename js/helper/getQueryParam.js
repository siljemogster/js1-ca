function getQueryParam(param) {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get(param);
  return value;
}

export default getQueryParam; 



