import React from "react";
import MaxWidthWrapper from "../maxWidthWrapper/MaxWidthWrapper";
import ModeToggle from "../modeToggle/ModeToggle";
import Logo from "./logo/Logo";
import { Button } from "../ui/button";
import Sidebar from "./sidebar/Sidebar";
import Navs from "./navs/Navs";
import CallIcon from "@mui/icons-material/Call";
import EventIcon from "@mui/icons-material/Event";
import Link from "next/link";

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

          <Button
            className="hidden h-[40px] gap-2 border-primary lg:flex"
            variant="outline"
            asChild
          >
            <Link href="#contact-form">
              <CallIcon />
              Contact
            </Link>
          </Button>

          <Button className="hidden h-[40px] gap-2 lg:flex">
            <EventIcon />
            Book a Strategy Session
          </Button>

          <ModeToggle />
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
