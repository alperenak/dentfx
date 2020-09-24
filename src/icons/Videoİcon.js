import * as React from "react";

function SvgVideoİcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 87.641 85.445" {...props}>
      <defs>
        <filter
          id="video-icon_svg__a"
          x={0}
          y={0}
          width={87.641}
          height={85.445}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={6} result="blur" />
          <feFlood floodColor="#071948" floodOpacity={0.557} />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g filter="url(#video-icon_svg__a)">
        <path
          data-name="video-icon"
          d="M35.237 34.2a6 6 0 018.958-5.171l16.319 9.245a6 6 0 01.042 10.416L44.085 58.2a6 6 0 01-9-5.245z"
          fill="#fff"
        />
      </g>
    </svg>
  );
}

export default SvgVideoİcon;
