"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Logo from "../logo/Logo";
import Navs from "../navs/Navs";
import React, { useEffect } from "react";
import { useIsLargeScreen } from "@/components/hooks/useData";
import CallIcon from "@mui/icons-material/Call";
import EventIcon from "@mui/icons-material/Event";
import Link from "next/link";

const Sidebar = () => {
  const [open, setOpen] = React.useState(false);
  const { isLargeScreen } = useIsLargeScreen();

  useEffect(() => {
    if (isLargeScreen) {
      setOpen(false);
    }
  }, [isLargeScreen]);

  const handleNavClick = () => {
    if (open) {
      setOpen && setOpen(false);
    }
  };

  return (
    <div className="hidden max-lg:flex">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="hidden items-center justify-center max-lg:flex"
          >
            <HamburgerMenuIcon className="icon size-5" />
          </Button>
        </SheetTrigger>

        <SheetContent className="z-[100] px-10">
          <SheetHeader className="flex">
            <SheetTitle>
              <Logo classes="size-[200px] -ml-4" noLink />
            </SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>

          <Navs handleNavClick={handleNavClick} vertical />

          <Button
            className="mb-5 mt-20 h-[40px] w-full gap-2 border-primary lg:flex"
            variant="outline"
            onClick={handleNavClick}
            asChild
          >
            <Link href="#contact-form">
              <CallIcon />
              Contact
            </Link>
          </Button>

          <Button
            className="h-[40px] w-full gap-2 lg:flex"
            onClick={handleNavClick}
          >
            <EventIcon />
            Book a Strategy Session
          </Button>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Sidebar;
