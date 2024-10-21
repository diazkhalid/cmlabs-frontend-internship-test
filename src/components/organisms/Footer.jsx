"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Footer() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        setIsVisible(true);
      },
      pathname === "/" ? 0 : 2000
    );

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!isVisible) return null;

  return (
    <div
      id="footer"
      className="p-7 flex justify-center items-center bg-primary text-white text-Arima mt-40"
    >
      <h1 className="text-md md:text-lg">© 2024 All Right Reserved</h1>
    </div>
  );
}
