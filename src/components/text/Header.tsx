import { playfairDisplay } from "@/utils/utils";
import React from "react";

const Header = ({ title, classes }: { title: string; classes?: string }) => {
  return (
    <h1
      className={`z-50 text-3xl font-semibold md:text-5xl ${playfairDisplay.className} ${classes}`}
    >
      {title}
    </h1>
  );
};

export default Header;
