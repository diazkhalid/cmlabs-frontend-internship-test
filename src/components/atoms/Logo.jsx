import Image from "next/image";
import React from "react";

export default function Logo({
  imgUrl = "/icons/icon-192x192.png",
  width = 50,
  height = 50,
}) {
  return (
    <Image
      src={imgUrl}
      width={width}
      height={height}
      alt="logo"
      className="rounded-full"
    ></Image>
  );
}
