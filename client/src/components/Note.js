import React from 'react';

const Note = ({ note, toggleImportance }) => {
  const btnLabel = note.important ? 'make not important' : 'make important';
  return (
    <li style={{ color: note.important ? 'red' : 'grey' }} className="note">
      <span>
        {note.content} - written on {note.date}
      </span>
      <button onClick={() => toggleImportance(note.id)}>{btnLabel}</button>
    </li>
  );
};

export default Note;
