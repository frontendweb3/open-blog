"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { ClassValue } from "class-variance-authority/types";
import { Moon, Sun } from "lucide-react";

export function ThemeSwitch({ className }: { className?: ClassValue }) {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant="link"
      size="icon"
      className={cn("flex h-12 w-12 items-center justify-center", className)}
      onClick={() =>
        setTheme((currentTheme) => (currentTheme == "dark" ? "light" : "dark"))
      }
    >
      {theme == "dark" ? <Sun /> : <Moon />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
