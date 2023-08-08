import { useState } from "react";
import { Switch, Wheel, Text } from "./components";
import "./App.css";

function App() {
  const [isWheel, setIsWheel] = useState<boolean>(true);
  return (
    <div className="app">
      <div style={{ position: "absolute", top: 25, right: 25 }}>
        <Switch isWheel={isWheel} setWheelPortfolio={setIsWheel} />
      </div>
      {isWheel ? <Wheel /> : <Text />}
    </div>
  );
}

export default App;
