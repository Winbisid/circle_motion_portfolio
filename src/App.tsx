import { useState } from "react";
import { Switch, Footer, Wheel, Text } from "./components";
import "./App.css";

function App() {
  const [isWheel, setIsWheel] = useState<boolean>(false);
  return (
    <div className="app">
      <Switch isWheel={isWheel} setWheelPortfolio={setIsWheel} />
      {isWheel ? (
        <Wheel />
      ) : (
        <>
          <Text />
          <Text />
          <Text />
          <Text />
          <Text />
          <Text />
          <Text />
          <Text />
          <Text />
          <Text />
          <Text />
          <Text />
          <Text />
          <Text />
          <Text />
          <Text />
          <Text />
          <Text />
          <Text />
          <Text />
          <Text />
          <Text />
          <Text />
          <Text />
        </>
      )}
      <Footer isWheel={isWheel} />
    </div>
  );
}

export default App;
