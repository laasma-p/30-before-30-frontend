import "./App.css";
import Header from "./Header";
import Login from "./Login";
import List from "./List";
import ProgressBar from "./ProgressBar";
import Footer from "./Footer";

const listItems = [
  {
    id: 1,
    itemName: "Item 1",
  },
  {
    id: 2,
    itemName: "Item 2",
  },
  {
    id: 3,
    itemName: "Item 3",
  },
  {
    id: 4,
    itemName: "Item 4",
  },
  {
    id: 5,
    itemName: "Item 5",
  },
  {
    id: 6,
    itemName: "Item 6",
  },
  {
    id: 7,
    itemName: "Item 7",
  },
  {
    id: 8,
    itemName: "Item 8",
  },
  {
    id: 9,
    itemName: "Item 9",
  },
];

function App() {
  return (
    <div className="bg-white dark:bg-black">
      <Header />
      <Login />
      <List listItems={listItems} />
      <ProgressBar />
      <Footer />
    </div>
  );
}

export default App;
