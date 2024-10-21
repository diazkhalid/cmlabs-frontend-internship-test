"use client";
import React from "react";
import Navbar from "../molecules/Navbar";
import Hero from "../molecules/Hero";
import { usePathname } from "next/navigation";
const enableHero = ["/"];

export default function Header() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col">
      <Navbar></Navbar>
      {enableHero.includes(pathname) && <Hero></Hero>}
    </div>
  );
}
