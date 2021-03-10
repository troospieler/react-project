import { Character } from './Character';

import './CharactersList.scss'
import { Loader } from './Loader';

export const CharactersList = ({
  characters,
  characterName,
  setCharacterName,
  setCurrentComments,
}) => {

  return !characters.length ?
    <Loader />
    : (
      <ul className='list'>
        {characters.map(character => (
          <li
            className={`${characterName === character.name ? 'active' : ''}`}
            key={character.url}
          >
            <Character
              character={character}
              characterName={characterName}
              setCharacterName={setCharacterName}
              setCurrentComments={setCurrentComments}
            />
          </li>
        ))}
      </ul>
    )
}