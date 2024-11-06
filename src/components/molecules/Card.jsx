"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Card({
  title = "Food Categories",
  imgUrl = "/images/hero-img.jpeg",
  desc,
  route = "/categories",
}) {
  const navigate = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onClick={() => navigate.push(route)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex flex-col justify-center items-center p-3 bg-zinc-100 rounded-xl gap-5 cursor-pointer border-2 border-primary/50"
    >
      <div className="w-64 sm:w-72 h-64 overflow-hidden rounded-lg">
        <Image
          src={imgUrl}
          width={300}
          height={300}
          alt="hero"
          className={`w-full h-full object-cover transition-transform duration-300 ${
            isHovered ? "scale-105" : ""
          }`}
        ></Image>
      </div>
      <div className="flex flex-col items-center justify-center w-64 sm:w-72">
        <h1 className="font-bold text-Arima text-xl text-center truncate w-full">
          {title}
        </h1>
        {desc && <p>{desc}</p>}
      </div>
    </div>
  );
}
