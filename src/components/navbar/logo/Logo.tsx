"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import darkLogo from "../../../../public/logo-dark.png";
import lightLogo from "../../../../public/logo-white.png";
import { useTheme } from "next-themes";
import Link from "next/link";

const Logo = ({ classes }: { classes?: string }) => {
  const { resolvedTheme } = useTheme();
  const [src, setSrc] = useState(lightLogo);

  useEffect(() => {
    resolvedTheme === "light" ? setSrc(lightLogo) : setSrc(darkLogo);
  }, [resolvedTheme]);

  return (
    <Link href="/">
      <Image
        src={src}
        height={150}
        width={150}
        alt="logo"
        className={`${classes} -ml-2`}
      />
    </Link>
  );
};

export default Logo;
