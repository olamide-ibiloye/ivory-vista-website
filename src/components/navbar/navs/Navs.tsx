"use client";

import { navLinks } from "@/components/constants";
import { playfairDisplay } from "@/utils/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navs = ({
  vertical = false,
  handleNavClick,
}: {
  vertical?: boolean;
  handleNavClick?: () => void;
}) => {
  const pathname = usePathname();

  return (
    <div
      className={`${playfairDisplay.className} ${vertical ? "flex-col items-start justify-start" : "flex-row items-center justify-center"} flex gap-10`}
    >
      {navLinks.map((navLink) => {
        const isActive =
          pathname === navLink.route ||
          pathname.startsWith(`${navLink.route}/`);

        return (
          <Link
            key={navLink.label}
            href={navLink.route}
            onClick={handleNavClick}
            className={`${isActive ? "border-b-2 border-b-primary" : "border-b-2 border-b-transparent"}`}
          >
            {navLink.label}
          </Link>
        );
      })}
    </div>
  );
};

export default Navs;
