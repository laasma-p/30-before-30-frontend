const Header = () => {
  return (
    <header className="transition-all bg-pink dark:bg-hot-pink dark:text-white flex flex-col justify-center items-center text-center">
      <h1 className="w-10/12 text-2xl md:w-9/12 lg:text-3xl px-3 pt-6 pb-2">
        30 Things To Do Before Turning 30
      </h1>
      <p className="w-8/12 text-md md:w-7/12 lg:text-lg px-2 pb-4">
        Here you can see your list of 30 things to do in your life before 30. By
        clicking on an item it gets crossed out, and progress updates to see how
        far have you come.
      </p>
    </header>
  );
};

export default Header;
