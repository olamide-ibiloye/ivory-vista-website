import React from "react";
import MaxWidthWrapper from "../maxWidthWrapper/MaxWidthWrapper";
import MenuButton from "./menuButton/MenuButton";
import ModeToggle from "../modeToggle/ModeToggle";
import Logo from "./logo/Logo";
import Link from "next/link";
import { Button } from "../ui/button";
import { playfairDisplay } from "@/app/layout";

const Navbar = () => {
  return (
    <nav className="sticky inset-x-0 top-0 z-[100] flex h-[70px] w-full items-center justify-center border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all dark:bg-transparent">
      <MaxWidthWrapper className="flex items-center justify-between">
        <Logo />

        <div
          className={`${playfairDisplay.className} hidden items-center justify-center gap-10 lg:flex`}
        >
          <Link href="">Home</Link>
          <Link href="">About Us</Link>
          <Link href="">Our Services</Link>
          <Link href="">Projects</Link>
          <Link href="">Contact</Link>
        </div>

        <div className="flex items-center justify-center gap-3">
          <MenuButton />

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
