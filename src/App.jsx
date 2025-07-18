import React, { useState } from "react";
import StickyNote from "./components/StickyNote";

const App = () => {
  const [notes, setNotes] = useState();
  return (
    <>
      <h1 className="m-3 text-white font-bold text-5xl italic"> Kvik Note</h1>
      <div className="text-center">
        <button className="bg-green-700 cursor-pointer hover:bg-green-800 text-white py-3 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-800 px-5 rounded-lg">
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
        <StickyNote />
      </div>
    </>
  );
};

export default App;
