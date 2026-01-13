import { useState } from "react";
import { Switch, Footer, Wheel, Text } from "./components";
import ResumeConsole from "./components/resume/ResumeConsole";
import "./App.css";

function App() {
  const [isWheel, setIsWheel] = useState<boolean>(false);
  const isResumeRoute = typeof window !== "undefined" && window.location.pathname.startsWith("/resume");

  if (isResumeRoute) {
    return <ResumeConsole />;
  }

  return (
    <div className="app">
      {isWheel ? (
        <>
          <Switch isWheel={isWheel} setWheelPortfolio={setIsWheel} />
          <Wheel />
        </>
      ) : (
        <Text isWheel={isWheel} setWheelPortfolio={setIsWheel} />
      )}
      {/* <Footer isWheel={isWheel} /> */}
    </div>
  );
}

export default App;
