"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import darkLogo from "../../../../public/logo-dark.png";
import lightLogo from "../../../../public/logo-white.png";
import { useTheme } from "next-themes";

const Logo = () => {
  const { resolvedTheme } = useTheme();
  const [src, setSrc] = useState(lightLogo);

  useEffect(() => {
    resolvedTheme === "light" ? setSrc(lightLogo) : setSrc(darkLogo);
  }, [resolvedTheme]);

  return <Image src={src} height={150} width={150} alt="logo" />;
};

export default Logo;
