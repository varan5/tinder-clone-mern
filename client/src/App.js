import "./App.css";
import TinderCards from "./TinderCards/TinderCards";
import Header from "./Header/Header";
import SwipeButtons from "./SwipeButtons/SwipeButtons";

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
