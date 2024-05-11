import ListItem from "./ListItem";
import ProgressBar from "./ProgressBar";
import { useState, useEffect } from "react";

const List = ({ isLoggedIn }) => {
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    const fetchListItems = async () => {
      try {
        const response = await fetch(
          isLoggedIn
            ? "http://localhost:3000/user-items-list"
            : "http://localhost:3000/public-items-list",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

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

  const totalItemsCount = listItems.length;
  const completedItemsCount = listItems.filter((item) => item.completed).length;

  const progress =
    totalItemsCount > 0 ? (completedItemsCount / totalItemsCount) * 100 : 0;

  return (
    <>
      <ProgressBar progress={progress} />
      <div className="mx-3 mt-6 pb-4 flex justify-center items-center dark:text-white">
        <ul className="flex flex-col justify-center items-center">
          {listItems.map((listItem) => {
            return (
              <ListItem
                key={listItem.id}
                isCompleted={listItem.completed}
                isLoggedIn={isLoggedIn}
                onClick={() => completeItemHandler(listItem.id)}
              >
                {listItem.item}
              </ListItem>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default List;
