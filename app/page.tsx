// next 13 app dir btw
"use client";

import type { NextPage } from "next";
import { useState } from "react";
import { MyButton } from "./components/Button";

const Home: NextPage = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <MyButton
        // This is pretty great here.
        // If you pop intellisense, you'll see it feels like straight JSX.
        // But, at the same time, is that too much flexibility?
        // Are we leaving ourselves open to way too many mistakes?
        // This styleProps thing is kinda fire, though.
        styleProps={{
          color: toggle ? "primary" : "secondary",
          weight: toggle ? "black" : "light",
        }}
        onClick={() => setToggle(!toggle)}
      >
        Flip it!!!
      </MyButton>
    </div>
  );
};

export default Home;
