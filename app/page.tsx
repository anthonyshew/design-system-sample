"use client";

import type { NextPage } from "next";
import { useState } from "react";
import { Button } from "./components/Button";

const Home: NextPage = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Button
        color={toggle ? "primary" : "secondary"}
        weight={toggle ? "black" : "light"}
        onClick={() => setToggle(!toggle)}
      >
        Flip it!!!
      </Button>
    </div>
  );
};

export default Home;
