"use client";

import { playfairDisplay } from "@/utils/utils";
import Link from "next/link";
import React, { ReactNode } from "react";

const Navs = ({
  vertical = false,
  open,
  setOpen,
}: {
  vertical?: boolean;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleNavClick = () => {
    if (open) {
      setOpen && setOpen(false);
    }
  };

  const IvoryLink = ({
    href,
    children,
  }: {
    href: string;
    children: ReactNode;
  }) => {
    return (
      <Link href={href} onClick={handleNavClick}>
        {children}
      </Link>
    );
  };

  return (
    <div
      className={`${playfairDisplay.className} ${vertical ? "flex-col items-start justify-start" : "flex-row items-center justify-center"} flex gap-10`}
    >
      <IvoryLink href="/">Home</IvoryLink>
      <IvoryLink href="/about-us">About Us</IvoryLink>
      <IvoryLink href="/our-services">Our Services</IvoryLink>
      <IvoryLink href="/projects">Projects</IvoryLink>
      <IvoryLink href="/contact">Contact</IvoryLink>
    </div>
  );
};

export default Navs;
