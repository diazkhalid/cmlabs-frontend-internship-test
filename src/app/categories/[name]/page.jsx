"use client";
import Card from "@/components/molecules/Card";
import CardContainer from "@/components/organisms/CardsContainer";
import { getFoodsByCategoryName } from "@/services/foodsCategories";
import React, { useEffect, useState } from "react";
import LoadingPage from "../loading";
import $ from "jquery";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { IoFastFoodSharp, IoHome } from "react-icons/io5";
import { BiSolidCategoryAlt } from "react-icons/bi";

export default function CategoryFoods({ params }) {
  const { name } = params;
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getFoodsByCategoryName(name);
      setData(data.meals);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      $("#this").slideDown(500);
    }
  }, [data]);

  return (
    <>
      {data ? (
        <div
          id="this"
          className="flex flex-col gap-5 justify-start items-center relative top-20 p-5"
          style={{ display: "none" }}
        >
          <div className="flex w-full max-w-6xl justify-center items-center">
            <Breadcrumbs>
              <BreadcrumbItem href="/" startContent={<IoHome />}>
                Home
              </BreadcrumbItem>
              <BreadcrumbItem
                href="/categories"
                startContent={<BiSolidCategoryAlt />}
              >
                Categories
              </BreadcrumbItem>
              <BreadcrumbItem current startContent={<IoFastFoodSharp />}>
                {name}
              </BreadcrumbItem>
            </Breadcrumbs>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-Arima">{name}</h1>
          <CardContainer>
            {data?.map((food) => (
              <Card
                key={food.idMeal}
                title={food.strMeal}
                imgUrl={food.strMealThumb}
                route={`/categories/${name}/${food.idMeal}`}
              ></Card>
            ))}
          </CardContainer>
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}
