import { Button, cva, VariantProps } from "../../external-lib/Button";

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

const MyButton = () => {
  return <Button cva={buttonDefaultStyles}></Button>;
};
