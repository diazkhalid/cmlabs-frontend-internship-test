"use client";
import React from "react";
import Logo from "../atoms/Logo";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const navigate = useRouter();
  return (
    <div className="flex justify-between items-center py-2 px-3 shadow-md">
      <div className="flex gap-3 justify-center items-center">
        <Logo></Logo>
        <p>Flavor Guide</p>
      </div>
      <div className="mr-10 w-1/4">
        <ul className="flex gap-3">
          <li className="cursor-pointer" onClick={() => navigate.push("/")}>
            <div className="py-2 px-4 hover:bg-slate-300 rounded-lg">
              <p className="font-semibold">Home</p>
            </div>
          </li>
          <li
            className="cursor-pointer"
            onClick={() => navigate.push("/foods")}
          >
            <div className="py-2 px-4 hover:bg-slate-300 rounded-lg">
              <p className="font-semibold">Foods</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
