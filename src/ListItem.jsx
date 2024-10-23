import { useState } from "react";

const ListItem = ({ children, isCompleted, onClick, onRemove, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedItem, setEditedItem] = useState(children);

  const handleClick = () => {
    if (!isCompleted) {
      onClick();
    }
  };

  const saveEditHandler = (event) => {
    event.preventDefault();
    onEdit(editedItem);
    setIsEditing(false);
  };

  const editChangeHandler = (event) => {
    setEditedItem(event.target.value);
  };

  return (
    <li className="py-2.5 px-3 text-lg w-full sm:max-w-sm flex justify-between items-center bg-light-pink rounded-lg shadow-lg mb-3 text-black">
      {isEditing ? (
        <form onSubmit={saveEditHandler} className="w-full flex justify-center">
          <input
            type="text"
            value={editedItem}
            onChange={editChangeHandler}
            className="border border-hot-pink p-1 rounded-md focus:outline-hot-pink mr-2"
          />
          <button className="bg-hot-pink text-white hover:text-black px-3 py-1 rounded hover:bg-pink transition-all">
            Save
          </button>
        </form>
      ) : (
        <>
          <span
            className={`break-all ${isCompleted ? "line-through" : " "}`}
            onClick={handleClick}
            style={{ cursor: !isCompleted ? "pointer" : "default" }}
          >
            {children}
          </span>
          <div className="flex flex-row">
            <button
              onClick={() => {
                if (!isCompleted) setIsEditing(true);
              }}
              className={`ml-4 px-3 py-1 rounded transition-all ${
                isCompleted
                  ? "bg-beige text-black cursor-not-allowed"
                  : "bg-hot-pink text-white hover:text-black hover:bg-pink"
              }`}
            >
              Edit
            </button>
            <button
              onClick={onRemove}
              className="ml-4 bg-hot-pink text-white hover:text-black px-3 py-1 rounded hover:bg-pink transition-all"
            >
              Remove
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default ListItem;
