// This would be an import from @itz/ui.
import { Button, cva, VariantProps } from "../../external-lib/Button";

import { ButtonHTMLAttributes, ReactNode } from "react";

// Now we start cueing up the style system for this particular app.
// You can see default variants down at the bottom there.
// There is also a "compoundVariants" that I didn't really explore.
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
  defaultVariants: {
    color: "primary",
    // TS will recommend you "weight" if you want to try that.
    // Keeps things pretty tight, pretty good enforcement!
  },
});

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  styleProps: Partial<VariantProps<typeof buttonStyles>>;
  children: ReactNode;
}

// But, once again, you can really kinda just do whatever you want at this layer.
// I'm not really doing anything to force you into our way...
// ...but I'm also leaving a lot of wiggle
// so that it's flexible enough to be used
// in any agency client situation.

// If they don't have any opinions, we can do whatever.
// If they have a bunch of opinions, we can hit the spec.
// If they're somewhere in between, we have plenty of control.

// Head to /app/page to see an impl.
export const MyButton = ({ children, styleProps, ...props }: Props) => {
  return (
    <Button className={buttonStyles({ ...styleProps })} {...props}>
      {children}
    </Button>
  );
};
