import ListItem from "./ListItem";
import Header from "./Header";
import ProgressBar from "./ProgressBar";
import { useState, useEffect } from "react";

const List = ({ isLoggedIn, onLogout }) => {
  const [listItems, setListItems] = useState([]);
  const [listItem, setListItem] = useState("");

  const listItemChangeHandler = (event) => {
    setListItem(event.target.value);
  };

  useEffect(() => {
    const fetchListItems = async () => {
      try {
        const response = await fetch("http://localhost:3000/user-items-list", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch list data");
        }

        const data = await response.json();
        setListItems(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchListItems();
  }, [isLoggedIn]);

  const completeItemHandler = async (itemId) => {
    try {
      const response = await fetch("http://localhost:3000/complete-item", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ itemId }),
      });

      if (!response.ok) {
        throw new Error("Failed to mark item as completed");
      }

      setListItems((prevListItems) =>
        prevListItems.map((item) =>
          item.id === itemId ? { ...item, completed: true } : item
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  const addItemHandler = async (event) => {
    if (listItems.length < maxListItems && listItem.trim()) {
      event.preventDefault();

      try {
        const response = await fetch("http://localhost:3000/add-item", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ item: listItem }),
        });

        if (!response.ok) {
          throw new Error("Failed to add an item");
        }

        const addedItem = await response.json();
        setListItems((prevListItems) => [...prevListItems, addedItem]);
        setListItem("");
      } catch (error) {
        console.error(error);
      }
    }
  };

  const removeItemHandler = async (itemId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/remove-item/${itemId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to remove item");
      }

      setListItems((prevListItems) =>
        prevListItems.filter((item) => item.id !== itemId)
      );
    } catch (error) {
      console.error(error);
    }
  };

  const clearListHandler = async () => {
    try {
      const response = await fetch("http://localhost:3000/clear-list", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to clear the list");
      }

      setListItems([]);
    } catch (error) {
      console.error(error);
    }
  };

  const editItemHandler = async (itemId, newItem) => {
    try {
      const response = await fetch(
        `http://localhost:3000/edit-item/${itemId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ item: newItem }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to edit the item");
      }

      const updatedItem = await response.json();
      setListItems((prevListItems) =>
        prevListItems.map((item) => (item.id === itemId ? updatedItem : item))
      );
    } catch (error) {
      console.error(error);
    }
  };

  const totalItemsCount = listItems.length;
  const completedItemsCount = listItems.filter((item) => item.completed).length;
  const maxListItems = 30;

  const progress =
    totalItemsCount > 0 ? (completedItemsCount / totalItemsCount) * 100 : 0;

  return (
    <>
      <Header onLogout={onLogout} />
      <ProgressBar progress={progress} />
      {totalItemsCount < maxListItems && (
        <form onSubmit={addItemHandler}>
          <div className="mt-4 flex justify-center">
            <div className="flex flex-col sm:flex-row items-center">
              <label htmlFor="listItem" className="sr-only">
                Add a new item
              </label>
              <input
                id="listItem"
                type="text"
                className="border border-hot-pink p-2 rounded-md focus:outline-hot-pink"
                value={listItem}
                onChange={listItemChangeHandler}
                placeholder="A new item"
              />
              <button className="ml-2 mt-2 sm:mt-0 bg-hot-pink hover:bg-pink text-white hover:text-black dark:bg-pink dark:hover:bg-hot-pink dark:hover:text-black px-4 py-2 rounded-md transition-all">
                Add
              </button>
            </div>
          </div>
        </form>
      )}
      {totalItemsCount > 0 && (
        <div className="mt-4 flex justify-center">
          <button
            onClick={clearListHandler}
            className="mx-3 bg-hot-pink hover:bg-pink text-white hover:text-black dark:bg-pink dark:hover:bg-hot-pink dark:hover:text-black w-full text-lg max-w-xs px-1.5 py-2 rounded-md transition-all"
          >
            Clear the list
          </button>
        </div>
      )}
      {totalItemsCount >= maxListItems && (
        <p className="py-1.5 px-4 text-lg text-center">
          Maximum of 30 items reached.
        </p>
      )}
      <div className="mx-3 mt-6 pb-4 flex justify-center items-center dark:text-white">
        {totalItemsCount === 0 ? (
          <p className="py-1.5 px-4 text-lg text-center">No items yet.</p>
        ) : (
          <ul className="flex flex-col justify-center items-center">
            {listItems.map((listItem) => {
              return (
                <ListItem
                  key={listItem.id}
                  isCompleted={listItem.completed}
                  isLoggedIn={isLoggedIn}
                  onClick={() => completeItemHandler(listItem.id)}
                  onRemove={() => removeItemHandler(listItem.id)}
                  onEdit={(newItem) => editItemHandler(listItem.id, newItem)}
                >
                  {listItem.item}
                </ListItem>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default List;
