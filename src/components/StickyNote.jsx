import { useState } from "react";

const StickyNote = ({ id, text, updateNote, deleteNotes }) => {
  const [isediting, setisEditing] = useState(false);
  const [newText, setNewText] = useState(text);
  const handleEdit = () => {
    setisEditing(true);
  };
  const handleSave = () => {
    updateNote(id, newText);
    setisEditing(false);
  };

  return (
    <>
      {isediting ? (
        <div className=" bg-yellow-100 p-4 rounded-md">
          <textarea
            value={newText}
            onChange={(e) => {
              setNewText(e.target.value);
            }}
            className="bg-yellow-50"
          ></textarea>{" "}
          <br />
          <button
            onClick={handleSave}
            className="text-white text-s mbg-lime-700 hover:bg-lime-800 py-1 px-3 dark:bg-lime-600 dark:hover:bg-lime-700 rounded-lg mt-6"
          >
            Save
          </button>
        </div>
      ) : (
        <div className="bg-yellow-100 p-2 rounded-md shadow-lg shadow-slate-100 m-6">
          <p className="m-3">{text}</p>
          <div className="flex justify-end gap-4">
            <button
              onClick={handleEdit}
              className="text-white text-sm bg-gray-700 hover:bg-gray-700 p-1  rounded-lg dark:bg-gray-900 "
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
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </button>
            <button
              onClick={() => {
                deleteNotes(id);
              }}
              className="text-white text-sm bg-red-700 hover:bg-red-700 p-1  rounded-lg dark:bg-red-900  "
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
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default StickyNote;
