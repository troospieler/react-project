import React from 'react';
import './CharacterComments.scss'

export const CharacterComments = ({ character }) => {

  return character?.comments?.length ? (
    <div className="comments">
      <h4 className="comments__Header">
        {`${character.name} comments:`}
      </h4>
      <ul className="comments__List">
        {character?.comments.map(comment => (
          <li key={comment.id} className="comments__Comment">
            {comment.text}
          </li>
        ))}
      </ul>
    </div>

  ) : <p>No comments</p>
}