"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const changeTheme = () => {
    if (theme === "light") {
      return setTheme("dark");
    }

    return setTheme("light");
  };

  return isClient ? (
    <Button variant="outline" size="icon" onClick={changeTheme}>
      {theme === "light" ? (
        <SunIcon className="icon size-5" />
      ) : (
        <MoonIcon className="icon size-5" />
      )}
    </Button>
  ) : null;
};

export default ModeToggle;
