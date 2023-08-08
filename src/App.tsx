import { useState } from "react";
import { Switch, Footer, Wheel, Text } from "./components";
import "./App.css";

function App() {
  const [isWheel, setIsWheel] = useState<boolean>(false);
  return (
    <div className="app">
      <div style={{ position: "absolute", top: 25, right: 25 }}>
        <Switch isWheel={isWheel} setWheelPortfolio={setIsWheel} />
      </div>
      {isWheel ? <Wheel /> : <Text />}
      <Footer />
    </div>
  );
}

export default App;
