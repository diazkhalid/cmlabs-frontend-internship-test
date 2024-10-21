"use client";
import React, { useEffect, useState } from "react";
import Logo from "../atoms/Logo";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const navigate = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    function HandleScroll() {
      const scroll = window.scrollY;
      if (scroll > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", HandleScroll);
    return () => {
      window.removeEventListener("scroll", HandleScroll);
    };
  }, []);

  return (
    <div
      className={`${isScrolled && "backdrop-blur-lg !bg-black/50"} ${
        pathname === "/" ? "" : "bg-white shadow-md"
      } flex fixed justify-between items-center py-3 px-10 w-full z-[9]`}
    >
      <div className="flex gap-3 justify-center items-center w-full">
        <div
          className="flex gap-3 justify-center sm:justify-start items-center cursor-pointer w-full"
          onClick={() => navigate.push("/")}
        >
          <Logo></Logo>
          <p
            className={`${
              isScrolled && "text-white"
            } text-2xl font-semibold text-Arima mt-1 ${
              !isScrolled && pathname === "/" ? "text-white sm:text-black" : ""
            }  `}
          >
            Flavor Guide
          </p>
        </div>
        {/* <ul className="flex gap-3">
          <li className="cursor-pointer" onClick={() => navigate.push("/")}>
            <div
              className={`py-2 px-4 hover:bg-primary hover:text-white ${
                isScrolled ? "text-white" : "text-black"
              } rounded-xl`}
            >
              <p className="font-bold">Home</p>
            </div>
          </li>
          <li
            className="cursor-pointer"
            onClick={() => navigate.push("/foods")}
          >
            <div
              className={`py-2 px-4 hover:bg-primary hover:text-white ${
                isScrolled ? "text-white" : "text-black"
              } rounded-xl`}
            >
              <p className="font-bold">Foods</p>
            </div>
          </li>
        </ul> */}
      </div>
      {/* <div className="mr-10 w-1/4"></div> */}
    </div>
  );
}
