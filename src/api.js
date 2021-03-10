const MAIN_URL = 'https://swapi.dev/api/people/';

export const getCharacters = async () => {
  const response = await fetch(MAIN_URL);
  const result = await response.json();
  const characters = await result.results;
  return characters;
}

