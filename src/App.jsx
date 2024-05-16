import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Header";
import Login from "./Login";
import List from "./List";
import Footer from "./Footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(token !== null);

    const storageChangeHandler = () => {
      const updatedToken = localStorage.getItem("token");
      setIsLoggedIn(updatedToken !== null);
    };

    window.addEventListener("storage", storageChangeHandler);
    return () => {
      window.removeEventListener("storage", storageChangeHandler);
    };
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black transition-all">
      <Header />
      <div className="flex-grow">
        <Login
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          onLogin={handleLogin}
        />
        <List isLoggedIn={isLoggedIn} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
