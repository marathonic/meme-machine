import "./style.css";
import Header from "./components/Header";
import MemeInterface from "./components/MemeInterface";

function App() {
  return (
    <div className="big-container">
      <div className="app-container">
        <Header />
        <MemeInterface />
      </div>
    </div>
  );
}

export default App;
