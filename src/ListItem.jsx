const ListItem = ({ children, isCompleted, onClick }) => {
  const handleClick = () => {
    if (!isCompleted) {
      onClick();
    }
  };

  return (
    <li
      className={`py-1.5 px-4 text-lg text-center w-full sm:max-w-sm flex justify-center ${
        isCompleted ? "line-through" : ""
      }`}
      onClick={handleClick}
      style={{ cursor: isCompleted ? "default" : "pointer" }}
    >
      {children}
    </li>
  );
};

export default ListItem;
