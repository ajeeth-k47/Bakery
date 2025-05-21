import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: "default" | "circular-button";
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "default",
  ...props
}) => {
  const baseClass =
    variant === "circular-button"
      ? "btn btn-light btn-sm rounded-circle custom-circularBtn"
      : "submission-button fw-bold";

  return (
    <button className={`${baseClass} ${className}`} type="button" {...props}>
      {children}
    </button>
  );
};

export default Button;
