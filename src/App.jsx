import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Header";
import Login from "./Login";
import List from "./List";
import ProgressBar from "./ProgressBar";
import Footer from "./Footer";

function App() {
  const [listItems, setListItems] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setListItems(data);
      })
      .catch((error) => {
        console.log("Error fetching items: ", error);
      });
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const totalItems = listItems.length;
  const progress = (completedItems.length / totalItems) * 100;

  const strikeItemCompletion = (itemId) => {
    setCompletedItems((prevCompletedItems) => {
      if (prevCompletedItems.includes(itemId)) {
        return prevCompletedItems.filter((id) => id !== itemId);
      } else {
        return [...prevCompletedItems, itemId];
      }
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <div className="flex-grow">
        <Login
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          onLogin={handleLogin}
          onLogout={handleLogout}
        />
        <ProgressBar progress={progress} />
        <List
          listItems={listItems}
          completedItems={completedItems}
          strikeItemCompletion={strikeItemCompletion}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
