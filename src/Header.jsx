const Header = () => {
  return (
    <header className="transition-all bg-pink dark:bg-hot-pink dark:text-white flex flex-col justify-center items-center text-center">
      <h1 className="w-10/12 text-2xl md:w-9/12 lg:text-3xl px-3 pt-6 pb-2">
        30 Things I Want To Do Before Turning 30
      </h1>
      <p className="w-10/12 text-md md:w-9/12 lg:text-lg px-2 pb-4">
        Here are some cool things that I want to do in my life before turning
        30, but just still have not managed to do. Eventually they will be
        crossed out so progress can be tracked on how much I have done.
      </p>
    </header>
  );
};

export default Header;
