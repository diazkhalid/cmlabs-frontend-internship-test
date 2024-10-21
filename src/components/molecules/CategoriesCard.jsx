import { useRouter } from "next/navigation";
import React from "react";

export default function CategoriesCard({
  title = "Food Categories",
  imgUrl = "/images/hero-img.jpeg",
}) {
  const navigate = useRouter();
  return (
    <div
      onClick={() => navigate.push(`/categories/${title}`)}
      style={{ backgroundImage: `url('${imgUrl}')` }}
      className="flex justify-center items-center w-96 h-36 rounded-xl overflow-hidden bg-cover bg-center transition-transform duration-300 hover:scale-105 cursor-pointer"
    >
      <div className="w-full h-full flex relative bg-black/50 justify-center items-center text-white">
        <p className="font-bold text-xl">{title}</p>
      </div>
    </div>
  );
}
