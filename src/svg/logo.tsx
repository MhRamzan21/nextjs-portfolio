"use client";

import { SVGProps } from "@/types/global";

export const Logo = (props: SVGProps) => {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g className="dark:fill-white fill-black">
        <path d="M20 160V40H40L60 80L80 40H100V160H80V90L60 130L40 90V160H20Z" />
        <path d="M120 40H160C170 40 180 50 180 70C180 85 170 95 160 97L180 160H160L145 100H140V160H120V40ZM140 80H155C160 80 165 75 165 70C165 65 160 60 155 60H140V80Z" />
      </g>
    </svg>
  );
};
