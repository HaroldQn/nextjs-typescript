// type ButtonProps = {
//   style: React.CSSProperties;
// };

"use client";
import { JSX } from "react";

type ButtonProps = {
  children: JSX.Element | JSX.Element[] | string;
}

function Button({children} : ButtonProps) {
  return <button >
    Harold
  </button>;
}

function page() {
  return (
    <>
      <Button>
        <span></span>

      </Button>
    </>
  );
}

export default page;
