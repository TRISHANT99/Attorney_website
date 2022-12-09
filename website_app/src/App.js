import "./App.css";
import HomeLeft from "./components/HomeLeft";
import HomeRight from "./components/HomeRight";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="home">
        <HomeLeft />
        <HomeRight />
      </div>
    </>
  );
}

export default App;
