import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="flex justify-between h-[35rem] w-full items-center sm:py-10 sm:px-10 lg:px-24 xl:px-32 sm:gap-5 xl:gap-10 bg-primary">
      <div className="w-[35rem] hidden sm:flex">
        <p className="text-md sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-Arima">
          Bring Joy to Your Table, Every Day!
        </p>
      </div>
      <div className="w-full sm:w-80 h-full overflow-hidden sm:rounded-lg">
        <Image
          src={"/images/hero-img.jpeg"}
          alt="hero"
          width={500}
          height={500}
          priority
          className="object-cover w-full h-full"
        ></Image>
        <div className="flex sm:hidden justify-center items-center relative bg-black/60 w-full h-full bottom-[35rem] p-10">
          <p className="text-white text-5xl font-semibold text-Arima text-center">
            Bring Joy to Your Table, Every Day!
          </p>
        </div>
        <h1></h1>
      </div>
    </div>
  );
}
