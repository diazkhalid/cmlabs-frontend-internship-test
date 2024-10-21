import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="flex justify-between h-[35rem] items-center py-10 px-32 gap-10 bg-primary">
      <div className="w-[35rem]">
        <p className="text-7xl font-bold text-Arima">
          Bring Joy to Your Table, Every Day!
        </p>
      </div>
      <div className="w-80 h-full overflow-hidden rounded-lg">
        <Image
          src={"/images/hero-img.jpeg"}
          alt="hero"
          width={500}
          height={500}
          priority
          className="object-cover w-full h-full"
        ></Image>
      </div>
    </div>
  );
}
