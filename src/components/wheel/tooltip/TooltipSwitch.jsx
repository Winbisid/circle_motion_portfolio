import solidTooltip from "../../../assets/tooltip.svg";
import lineTooltip from "../../../assets/tooltip-line.svg";

export default function TooltipSwitch({ tooltips, setTooltips }) {
  return (
    <div
      onClick={() => setTooltips((prev) => !prev)}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: tooltips ? "purple" : "indigo",
        // backgroundColor: "indigo",
        borderRadius: "50%",
        margin: 20,
      }}
    >
      <img
        src={tooltips ? solidTooltip : lineTooltip}
        width={80}
        style={{
          display: "flex",
          padding: 15,
          //   position: "relative",
        }}
      />
    </div>
  );
}
