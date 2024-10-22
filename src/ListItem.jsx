const ListItem = ({ children, isCompleted, onClick, onRemove }) => {
  const handleClick = () => {
    if (!isCompleted) {
      onClick();
    }
  };

  return (
    <li className="py-2.5 px-3 text-lg w-full sm:max-w-sm flex justify-between items-center bg-light-pink rounded-lg shadow-lg mb-3 text-black">
      <span
        className={`break-all ${isCompleted ? "line-through" : " "}`}
        onClick={handleClick}
        style={{ cursor: !isCompleted ? "pointer" : "default" }}
      >
        {children}
      </span>
      <button
        onClick={() => {
          onRemove();
        }}
        className="ml-4 bg-hot-pink text-white hover:text-black px-3 py-1 rounded hover:bg-pink transition-all"
      >
        Remove
      </button>
    </li>
  );
};

export default ListItem;
