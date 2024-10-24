import { useState } from "react";
import Forms from "./Forms";

const Landing = ({ onLogin }) => {
  const [openForm, setOpenForm] = useState(false);

  const openFormHandler = () => {
    setOpenForm(true);
  };

  return (
    <div className="flex flex-col flex-grow items-center">
      <h1 className="text-center text-4xl lg:text-5xl px-3 pt-28 sm:pt-26 md:pt-32 pb-2 text-black dark:text-white">
        30 Before 30
      </h1>
      <p className="text-center text-md lg:text-lg px-6 pb-4 text-black dark:text-white">
        Here you can keep your list of 30 things YOU want to do before YOU turn
        30, track progress and see how far have you come.
      </p>
      {!openForm && (
        <button
          type="button"
          className="flex flex-wrap justify-center text-center w-10/12 text-lg bg-pink hover:bg-hot-pink dark:bg-hot-pink dark:hover:bg-pink text-black hover:text-white dark:text-white dark:hover:text-black max-w-xs px-3.5 py-2 mt-4 rounded-md transition-all"
          onClick={openFormHandler}
        >
          Login/Register
        </button>
      )}
      {openForm && <Forms onLogin={onLogin} />}
    </div>
  );
};

export default Landing;
