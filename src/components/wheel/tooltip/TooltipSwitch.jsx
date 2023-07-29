export default function TooltipSwitch({ tooltips, setTooltips }) {
  return (
    <div
      onClick={() => setTooltips((prev) => !prev)}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: tooltips ? "indigo" : "coral",
        width: 75,
        height: 75,
        borderRadius: "50%",
        margin: 20,
      }}
    >
      {tooltips ? "on" : "off"}
    </div>
  );
}
