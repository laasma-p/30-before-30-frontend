const ListItem = ({ children, isCompleted, isLoggedIn, onClick }) => {
  const handleClick = () => {
    if (isLoggedIn && !isCompleted) {
      onClick();
    }
  };

  return (
    <li
      className={`py-1.5 px-4 text-lg text-center w-full sm:max-w-sm flex justify-center ${
        isCompleted ? "line-through" : ""
      }`}
      onClick={handleClick}
      style={{ cursor: isLoggedIn && !isCompleted ? "pointer" : "default" }}
    >
      {children}
    </li>
  );
};

export default ListItem;
