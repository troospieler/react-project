import React, { useState } from 'react';
import { v4 } from 'uuid';

import './Character.scss';

export const Character = ({
  character,
  characterName,
  setCharacterName,
  setCurrentComments
}) => {

  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  const addComment = (text) => {
    const comment = {
      text,
      id: v4()
    }
    comment.text.length
      && setComments([...comments, comment]);
    setCommentText('');
    setCurrentComments(comments);
  }

  character.comments = comments;
  const length = character.comments.length;

  return (
    <div className="wrapper">
      <section className="character">
        <div className="character__Info">
          <div>
            <h3>{character.name}</h3>
            <h5>born on {character.birth_year}</h5>
          </div>

          <form className="character__Form">
            <textarea
              className="character__textarea"
              placeholder="Your comment"
              value={commentText}
              onChange={({ target }) => {
                setCommentText(target.value)
              }}
              type="text"
            />
            <button
              className="character__addCommentBtn"
              onClick={() => {
                addComment(commentText.trim())
              }}
              type="button"
            >add comment
            </button>
          </form>
        </div>

        <div className="character__charracterComments">
          {characterName !== character.name ? (
            <button
              disabled={!length}
              className="character__commentsBtn"
              onClick={() => {
                setCharacterName(character.name)
                window.scrollTo(0, 0)
              }}
            >{length ? `show ${length} comments` : 'no comments'}
            </button>
          ) :
            <button
              className="character__commentsBtn"
              onClick={() => {
                setCharacterName(null)
              }}
            >close comments
          </button>}
        </div>
      </section>
    </div >
  )
}