const Header = ({ onLogout }) => {
  return (
    <header className="transition-all bg-pink dark:bg-hot-pink dark:text-white flex flex-col justify-center items-center text-center pb-6">
      <h1 className="w-10/12 text-2xl md:w-9/12 lg:text-3xl px-3 pt-6 pb-2">
        30 Things To Do Before Turning 30
      </h1>
      <p className="w-8/12 text-md md:w-7/12 lg:text-lg px-2 pb-4">
        Here you can see your list of 30 things to do in your life before 30. By
        clicking on an item it gets crossed out, and progress updates to see how
        far have you come.
      </p>
      <button
        className="transition-all bg-pink hover:bg-light-pink text-white hover:text-black dark:bg-pink dark:hover:bg-light-pink dark:hover:text-black w-full text-lg max-w-xs px-1.5 py-2 rounded-md mt-4"
        onClick={onLogout}
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
