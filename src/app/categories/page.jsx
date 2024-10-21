"use client";
import CategoriesCard from "@/components/molecules/CategoriesCard";
import CardContainer from "@/components/organisms/CardsContainer";
import { getFoodsCategories } from "@/services/foodsCategories";
import React, { useEffect, useState } from "react";
import LoadingPage from "./loading";
import $ from "jquery";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { IoHome } from "react-icons/io5";
import { BiSolidCategoryAlt } from "react-icons/bi";

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
    if (data) {
      $("#this").slideDown(500);
    }
  }, [data]);
  return (
    <>
      {data ? (
        <div
          id="this"
          className="pt-28 flex flex-col gap-8 justify-center items-center py-10"
          style={{ display: "none" }}
        >
          <div className="flex w-full max-w-6xl justify-center items-center">
            <Breadcrumbs>
              <BreadcrumbItem href="/" startContent={<IoHome />}>
                Home
              </BreadcrumbItem>
              <BreadcrumbItem current startContent={<BiSolidCategoryAlt />}>
                Categories
              </BreadcrumbItem>
            </Breadcrumbs>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold text-Arima">
            Categories
          </h1>
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
      ) : (
        <LoadingPage />
      )}
    </>
  );
}
