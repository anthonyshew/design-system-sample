import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, ...props }: Props) => {
  return <button {...props}>{children}</button>;
};

export { cva, type VariantProps, Button };
