import React, { useState, useEffect } from 'react';
import './App.scss';

import { CharactersList } from './CharactersList';
import { CharacterComments } from './CharacterComments';
import { getCharacters } from './api'

function App() {
  const [characters, setCharacters] = useState([]);
  const [characterName, setCharacterName] = useState('');
  const [comments, setComments] = useState([])
  const [currentComments, setCurrentComments] = useState([]);

  const currentCharacter = characters.find(ch => ch.name === characterName);

  useEffect(() => {
    getCharacters().then(result => setCharacters(result))
  }, []);

  useEffect(() => {
    setComments(currentComments);
  }, [currentComments]);

  return (
    <div className="App">
      <section className="App__List">
        <CharactersList
          characters={characters}
          characterName={characterName}
          setCharacterName={setCharacterName}
          setCurrentComments={setCurrentComments}
        />
      </section>
      
      {characterName && (
        <section className="App__Comments">
          <CharacterComments
            character={currentCharacter}
            comments={comments}
          />
        </section>
        
      )}
    </div>

  );
}

export default App;
