"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "../components/ui/NavbarMenu";
import Link from "next/link";

export function Header() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#contact">Contact</Link>
        
        
        <MenuItem setActive={setActive} active={active} item="More">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Privacy Policy</HoveredLink>
            <HoveredLink href="/team">Terms of Service</HoveredLink>
            <HoveredLink href="/individual">
              Content & Community Guidelines
            </HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
