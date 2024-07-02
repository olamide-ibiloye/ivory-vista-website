"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "@mui/icons-material";
import React from "react";

const MenuButton = () => {
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => {}}
      className="hidden max-lg:block"
    >
      <Menu className="icon size-5" />
    </Button>
  );
};

export default MenuButton;
