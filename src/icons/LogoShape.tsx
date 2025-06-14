import { SVGAttributes } from "react";

export function LogoShape(props: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 40 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="shape-17">
        <g id="shape-17_2">
          <path
            d="M4.16699 37.1667L15.0003 26.3333H25.8337V15.5L36.667 26.3333L25.8337 37.1667H4.16699Z"
            fill="white"
          />
          <path
            d="M4.16699 15.5L15.0003 26.3333V15.5H25.8337L36.667 4.66667H15.0003L4.16699 15.5Z"
            fill="white"
          />
        </g>
      </g>
    </svg>
  );
}
