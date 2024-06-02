import React from "react";

const Button = ({
  children,
  onClick,
  value = "",
  activeBtn = false,
  className,
}) => {
  return (
    <div>
      <button
        className={` ${activeBtn ? "active" : ""} ${className}`}
        type="button"
        onClick={onClick}
        value={value}
        style={{ backgroundColor: activeBtn ? "#08edb9" : "inherit" }}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;

