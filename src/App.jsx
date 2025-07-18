import React, { useState } from "react";
import StickyNote from "./components/StickyNote";

const App = () => {
  const [notes, setNotes] = useState([]);
  const addNotes = () => {
    setNotes([
      ...notes,
      { id: Date.now(), text: "Click edit to write your note... " },
    ]);
  };
  const updateNote = (id, newText) => {
    setNotes((prev) =>
      prev.map((note) => (note.id === id ? { ...note, text: newText } : note))
    );
  };

  const deleteNotes = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <>
      <h1 className="m-3 text-white font-bold text-5xl italic"> Kvik Note</h1>
      <div className="text-center">
        <button
          onClick={addNotes}
          className="bg-green-700 cursor-pointer hover:bg-green-800 text-white py-3 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-800 px-5 rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-wrap">
        {notes.map((note) => (
          <StickyNote
            key={note.id}
            id={note.id}
            text={note.text}
            updateNote={updateNote}
            deleteNotes={deleteNotes}
          />
        ))}
      </div>
    </>
  );
};

export default App;
