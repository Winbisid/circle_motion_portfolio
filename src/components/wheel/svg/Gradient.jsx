export default function Gradient() {
  return (
    <defs>
      <radialGradient
        id="rad"
        cx="28.167"
        cy="14"
        r="29.043"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#fd5"></stop>
        <stop offset=".511" stopColor="#ff543f"></stop>
        <stop offset=".558" stopColor="#fc5245"></stop>
        <stop offset=".644" stopColor="#e64771"></stop>
        <stop offset=".761" stopColor="#d53e91"></stop>
        <stop offset=".863" stopColor="#cc39a4"></stop>
        <stop offset=".943" stopColor="#c837ab"></stop>
      </radialGradient>

      <linearGradient
        id="lin"
        gradientUnits="objectBoundingBox"
        x1="0"
        y1="0"
        x2="1"
        y2="1"
      >
        <stop offset="0" stopColor="red">
          <animate
            attributeName="stopColor"
            values="red;purple;aqua;green;yellow;orange;red;"
            dur="2s"
            repeatCount="indefinite"
          ></animate>
        </stop>
        <stop offset=".5" stopColor="purple">
          <animate
            attributeName="stopColor"
            values="purple;aqua;green;yellow;orange;red;purple;"
            dur="2s"
            repeatCount="indefinite"
          ></animate>
        </stop>
        <stop offset="1" stopColor="aqua">
          <animate
            attributeName="stopColor"
            values="aqua;green;yellow;orange;red;purple;aqua;"
            dur="2s"
            repeatCount="indefinite"
          ></animate>
        </stop>
        <animateTransform
          attributeName="gradientTransform"
          type="rotate"
          from="0 .5 .5"
          to="360 .5 .5"
          dur="2s"
          repeatCount="indefinite"
        />
      </linearGradient>
    </defs>
  );
}
