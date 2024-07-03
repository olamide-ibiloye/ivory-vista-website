import { playfairDisplay } from "@/app/layout";
import React from "react";

const Header = ({ title, classes }: { title: string; classes?: string }) => {
  return (
    <h1
      className={`text-3xl font-semibold md:text-5xl ${playfairDisplay.className} ${classes}`}
    >
      {title}
    </h1>
  );
};

export default Header;
