// This would be the stuff that is in our @itz/ui package.
// You'll see it's pretty simple at this point
// as far as the React component goes...
// ...but I think that's actually a strength?
// We're going to export cva stuff here, too,
// so that we can encourage a pattern
// when it comes usage time.

// I think my critique so far is that this layer
// doesn't lock you into anything really.
// If this were a non-Radix component (like in this sample),
// it's quite literally a re-export of HTML.
// I'm left wondering what can be done at this layer
// to force the API that we want at the next layer.

// Speaking of which, head to /app/components/Button.tsx for an impl.

import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

// Here, I'm just using an HTML button for my PoC.
// But for more complex elements, we would bring in a Radix primitive.
// https://www.radix-ui.com/
const Button = ({ children, ...props }: Props) => {
  return <button {...props}>{children}</button>;
};

export { cva, type VariantProps, Button };
