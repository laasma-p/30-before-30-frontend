import ListItem from "./ListItem";

const List = ({ listItems }) => {
  return (
    <div className="mx-3 mt-6 mb-4 flex justify-center items-center dark:text-white">
      <ul className="flex flex-col justify-center items-center">
        {listItems.map((listItem) => {
          return <ListItem key={listItem.id}>{listItem.itemName}</ListItem>;
        })}
      </ul>
    </div>
  );
};

export default List;
