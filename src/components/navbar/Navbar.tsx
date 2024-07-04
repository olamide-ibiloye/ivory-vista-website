import React from "react";
import MaxWidthWrapper from "../maxWidthWrapper/MaxWidthWrapper";
import ModeToggle from "../modeToggle/ModeToggle";
import Logo from "./logo/Logo";
import Link from "next/link";
import { Button } from "../ui/button";
import { playfairDisplay } from "@/app/layout";
import Sidebar from "./sidebar/Sidebar";
import Navs from "./navs/Navs";

const Navbar = () => {
  return (
    <nav className="sticky inset-x-0 top-0 z-50 flex h-[70px] w-full items-center justify-center border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all dark:bg-transparent">
      <MaxWidthWrapper className="flex items-center justify-between">
        <Logo />

        <div className="hidden lg:block">
          <Navs />
        </div>

        <div className="flex items-center justify-center gap-3">
          <Sidebar />

          <Button className="hidden h-[40px] w-[150px] lg:block">
            Contact Us
          </Button>

          <ModeToggle />
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
