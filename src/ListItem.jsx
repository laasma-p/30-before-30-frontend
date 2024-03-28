const ListItem = ({ children }) => {
  return (
    <li className="py-1.5 px-4 text-lg text-center w-full sm:max-w-sm flex justify-center">
      {children}
    </li>
  );
};

export default ListItem;
