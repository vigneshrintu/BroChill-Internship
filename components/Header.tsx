"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

export function Header() {
  return (
    <div className="relative w-full flex items-center justify-between bg-black">
      <Navbar className="top-0" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={cn("absolute top-0 left-0 right-0 p-2 pt-4 z-50 text-white bg-transparent", className)}
    >
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
        <UserButton>
        </UserButton>
        
          <Link href="/">
            <Image src={"/dudepro-logo.png"} alt="logo" height={130} width={130} />
          </Link>
          
        </div>
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
        <div className="hidden lg:flex text-sm space-x-4 ml-auto">
  <div className="whitespace-nowrap hover:text-gray-300">
    <Link href="/#home">Home</Link>
  </div>
  <div className="whitespace-nowrap hover:text-gray-300">
    <Link href="/#about">About</Link>
  </div>
  <div className="whitespace-nowrap hover:text-gray-300">
    <Link href="/#contact">Contact</Link>
  </div>
  <div>
<Link href='/sign-up'>Sign up</Link>
</div>
<div><Link href='/sign-in'>Sign In</Link></div>

  <div className="whitespace-nowrap hover:text-gray-300">
    <Link href="/privacy-policy">Privacy Policy</Link>
  </div>
  <div className="whitespace-nowrap hover:text-gray-300">
    <Link href="/terms-of-service">Terms of Service</Link>
  </div>
  <div className="whitespace-nowrap hover:text-gray-300">
    <Link href="/content-community-guidelines">Content & Community Guidelines</Link>
  </div>
</div>

      </div>
      {menuOpen && (
        <div className="lg:hidden flex flex-col justify-center items-center space-y-2 mt-8  bg-black p-8 text-md">
          <Link href="/#home">Home</Link>
          <Link href="/#about">About</Link>
          <Link href="/#contact">Contact</Link>
          <Link href='/sign-up'>Sign up</Link>
          <Link href='/sign-in'>Sign In</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
          <Link href="/content-community-guidelines">Content & Community Guidelines</Link>
        </div>
      )}
    </nav>
  );
}
