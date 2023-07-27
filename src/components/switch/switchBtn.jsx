import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";

export default function Switch({ isWheel, setWheelPortfolio }) {
  function switchItUp() {
    setWheelPortfolio((prev) => !prev);

    // onClick, route to /text-portfolio
  }

  return (
    <div
      style={{
        backgroundColor: "indigo",
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={switchItUp}
    >
      <img src={isWheel ? reactLogo : viteLogo} style={{}} />
    </div>
  );
}
