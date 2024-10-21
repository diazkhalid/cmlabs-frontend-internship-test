import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <Image
      src="/icons/icon-192x192.png"
      width={50}
      height={50}
      alt="logo"
      className="rounded-full"
    ></Image>
  );
}
