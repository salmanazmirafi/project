import "./App.css";
import MainDash from "./components/MainDash/MainDash";
import RightSide from "./components/rightSide/RightSide";
import SightBar from "./components/sidebar/SightBar";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <SightBar />
        <MainDash />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
