import * as React from "react";

function Loader(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        margin: "auto",
        background: "transparent",
      }}
      width={200}
      height={400}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      display="block"
      {...props}
    >
      <circle
        cx={50}
        cy={50}
        fill="none"
        stroke="#85a2b6"
        strokeWidth={1}
        r={10}
        strokeDasharray="32.98672286269283 12.995574287564276"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="0.4255319148936171s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        />
      </circle>
    </svg>
  );
}

export default Loader;
