"use client";
import CategoriesCard from "@/components/molecules/CategoriesCard";
import CardContainer from "@/components/organisms/CardsContainer";
import { getFoodsCategories } from "@/services/foodsCategories";
import React, { useEffect, useState } from "react";

export default function Categories() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getFoodsCategories();
      setData(data.categories);
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="pt-28 flex flex-col gap-8 justify-center items-center py-10">
      <h1 className="text-5xl font-semibold text-Arima">Categories</h1>
      <CardContainer>
        {data?.map((category) => (
          <CategoriesCard
            key={category.idCategory}
            title={category.strCategory}
            imgUrl={category.strCategoryThumb}
          >
            {" "}
          </CategoriesCard>
        ))}
      </CardContainer>
    </div>
  );
}
