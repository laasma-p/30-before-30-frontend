import "./App.css";
import Landing from "./Landing";
import List from "./List";
import Footer from "./Footer";
import { useState, useEffect } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const onLogin = () => {
    setIsLoggedIn(true);
  };

  const onLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black transition-all">
      {!isLoggedIn ? (
        <Landing onLogin={onLogin} />
      ) : (
        <List isLoggedIn={isLoggedIn} onLogout={onLogout} />
      )}
      <Footer />
    </div>
  );
}

export default App;
