import { playfairDisplay } from "@/app/layout";
import Link from "next/link";
import React from "react";

const Navs = ({ vertical = false }: { vertical?: boolean }) => {
  return (
    <div
      className={`${playfairDisplay.className} ${vertical ? "flex-col items-start justify-start" : "flex-row items-center justify-center"} flex gap-10`}
    >
      <Link href="/">Home</Link>
      <Link href="/about-us">About Us</Link>
      <Link href="">Our Services</Link>
      <Link href="">Projects</Link>
      <Link href="">Contact</Link>
    </div>
  );
};

export default Navs;
