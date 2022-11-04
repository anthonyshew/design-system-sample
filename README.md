Design system walkthrough to try see if we can iron out if this will create good DX.
My instinct is that this worked out quite well. But I don't know how it will scale.

Start in /external-lib/Button.tsx. This would be our shared npm package example.

Then go to /components/Button.tsx. This would be the example of us consuming that npm package and setting the styles for that project.

Then /app/page.tsx is the final implementation.

Things I like:

- This is genuinely really simple and has a tiny footprint.
- It's very "native web" and "native React." Not a lot of magic.
- No CSS-in-JS (React team is saying to stop doing it) but still keeping control of styling using JS because of cva.
- Tailwind isn't so bad after all. I think I might be starting to drink the kool-aid.
- The TypeScript for our styles stays pretty tight because of cva. Great little lib.
- We can really make this our own and ensure we aren't battling our design system.

Things I'm not sure of:

- Does this meet our use case? We have to hit the right amount of flexibility but also get the work-to-value ratio right. The tradeoffs here are reaaaaally murky until we put our foot on the gas and just try it.
- Will Radix primitives give us everything we need? At first glance, yes, as far as a11y is concerned. But what will we miss from Mantine?

Things I think I don't like:

- I feel like in the "external lib" I just kinda rewrote JSX. To be fair, I didn't bring in Radix yet so maybe the difference would be more profound if I built a popover or something.
