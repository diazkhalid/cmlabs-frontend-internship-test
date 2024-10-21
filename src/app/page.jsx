"use client";
import Card from "@/components/molecules/Card";
import CardContainer from "@/components/organisms/CardsContainer";
import { getRandomMeal } from "@/utils/getRandomMeal";
import { useEffect, useState } from "react";

export default function Home() {
  const [random, setRandom] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getRandomMeal();
      setRandom(data);
    };
    fetchData();
  }, []);

  return (
    <div className="px-5 py-10 flex flex-col justify-center items-center gap-5 mb-10">
      <p className="text-3xl font-bold text-Arima">Explore</p>
      <CardContainer>
        <Card
          title="Food Categories"
          imgUrl="/images/food-1.png"
          desc="Choose food categories"
        ></Card>
        <Card
          title="Random Food"
          imgUrl="/images/food-2.png"
          desc="Click to get a random food"
          route={`/categories/${random?.randomCategory?.strCategory}/${random?.randomMeal?.idMeal}`}
        ></Card>
      </CardContainer>
    </div>
  );
}
