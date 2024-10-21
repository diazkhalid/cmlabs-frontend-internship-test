"use client";
import Card from "@/components/molecules/Card";
import CardContainer from "@/components/organisms/CardsContainer";
import { getFoodsCategories } from "@/services/foodsCategories";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div className="px-5 py-10 flex flex-col justify-center items-center gap-5">
      <p className="text-3xl font-bold text-Arima">Explore</p>
      <CardContainer>
        <Card title="Food Categories" imgUrl="/images/food-1.png"></Card>
        <Card
          title="Random Food"
          imgUrl="/images/food-2.png"
          desc="Click to get a random food"
        ></Card>
      </CardContainer>
    </div>
  );
}
