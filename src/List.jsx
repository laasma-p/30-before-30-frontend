import ListItem from "./ListItem";

const List = ({ listItems, completedItems, strikeItemCompletion }) => {
  return (
    <div className="mx-3 mt-6 mb-4 flex justify-center items-center dark:text-white">
      <ul className="flex flex-col justify-center items-center">
        {listItems.map((listItem) => {
          const isCompleted = completedItems.includes(listItem.id);
          return (
            <ListItem
              key={listItem.id}
              isCompleted={isCompleted}
              onClick={() => strikeItemCompletion(listItem.id)}
            >
              {listItem.itemName}
            </ListItem>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
