import "./App.css";
import Landing from "./Landing";
import Footer from "./Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black transition-all">
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
