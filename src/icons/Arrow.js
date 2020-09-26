import * as React from "react";

function SvgArrow(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 5.639 8.833"
      fill="currentColor"
      {...props}
    >
      <path
        d="M5.054 8.312a.938.938 0 000-1.309L2.515 4.417 5.054 1.83a.938.938 0 000-1.309.9.9 0 00-1.286 0L.586 3.762a.938.938 0 000 1.309l3.182 3.241a.9.9 0 001.286 0z"
        strokeWidth={0.5}
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgArrow;
