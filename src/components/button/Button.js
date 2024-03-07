import React from "react";

const Button = ({
  onClick,
  className,
  full = false,
  type = "button",
  bgColor = "primary",
  children,
}) => {
  let bgClassName = "bg-primary";
  switch (bgColor) {
    case "primary":
      bgClassName = "bg-primary";
      break;
    case "secondary":
      bgClassName = "bg-secondary";
      break;
    default:
      bgClassName = "bg-primary";
      break;
  }
  return (
    <button
      onClick={onClick}
      className={`flex-end ${
        full ? "w-full" : ""
      } px-6 py-3 text-center bg-primary hover:opacity-50 rounded-lg font-bold ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;
