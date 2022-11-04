import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";

const buttonDefaultStyles = cva("text-xl", {
  variants: {
    color: {
      primary: "text-blue-500",
      secondary: "text-red-500",
    },
    weight: {
      black: "font-black",
      bold: "font-bold",
      medium: "font-medium",
      light: "font-light",
    },
  },
});

interface Props extends VariantProps<typeof buttonDefaultStyles> {
  children: ReactNode;
  onClick: any;
}

const Button = ({ color, weight, children, onClick }: Props) => {
  return (
    <button
      className={buttonDefaultStyles({ color, weight })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { cva, type VariantProps, Button };
