import { useState } from "react";

const Form = ({ isLoggedIn, setIsLoggedIn, onLogin }) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const enteredEmailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const enteredPasswordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const loginHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ enteredEmail, enteredPassword }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      setIsLoggedIn(true);
      setEnteredEmail("");
      setEnteredPassword("");
      onLogin(data.listData);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <>
      <div className="transition-all bg-light-pink w-10/12 sm:max-w-xl mx-auto mt-4 mb-2 px-4 rounded-md">
        <form
          className="flex flex-col justify-center items-center pt-1 pb-4"
          onSubmit={loginHandler}
        >
          <label htmlFor="email" className="block my-2 text-md">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            className="w-full rounded-md max-w-xs py-1.5 px-2 focus:outline-hot-pink text-md"
            value={enteredEmail}
            onChange={enteredEmailChangeHandler}
          />
          <label htmlFor="email" className="block my-2 text-md">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full rounded-md max-w-xs py-1.5 px-2 focus:outline-hot-pink text-md"
            value={enteredPassword}
            onChange={enteredPasswordChangeHandler}
          />
          <button className="bg-hot-pink hover:bg-pink text-white hover:text-black dark:bg-pink dark:hover:bg-hot-pink dark:hover:text-black w-full text-lg max-w-xs px-1.5 py-2 rounded-md mt-4">
            Log In
          </button>
        </form>
      </div>
      {isLoggedIn && (
        <button
          className="transition-all bg-hot-pink hover:bg-pink text-white hover:text-black dark:bg-pink dark:hover:bg-hot-pink dark:hover:text-black w-10/12 text-lg max-w-xs px-1.5 py-2 rounded-md mt-4"
          onClick={logoutHandler}
        >
          Logout
        </button>
      )}
    </>
  );
};

export default Form;
