import { ButtonHTMLAttributes, ReactNode } from "react";
import { Button, cva, VariantProps } from "../../external-lib/Button";

const buttonStyles = cva("text-xl", {
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

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  styleProps: VariantProps<typeof buttonStyles>;
  children: ReactNode;
}

export const MyButton = ({ children, ...props }: Props) => {
  return (
    <Button className={buttonStyles({ ...cva })} {...props}>
      {children}
    </Button>
  );
};
