import ListItem from "./ListItem";

const List = () => {
  return (
    <div className="mx-3 mt-6 mb-4 flex justify-center items-center dark:text-white">
      <ul className="flex flex-col justify-center items-center">
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
        <ListItem>Item 4</ListItem>
      </ul>
    </div>
  );
};

export default List;
