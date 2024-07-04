"use client";

import { useEffect, useState } from "react";

export const useIsLargeScreen = () => {
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(
    typeof window !== "undefined" ? window.innerWidth >= 1024 : false,
  );

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isLargeScreen };
};
