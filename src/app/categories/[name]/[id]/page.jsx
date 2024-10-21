"use client";
import { getMealById } from "@/services/foodsCategories";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoFastFoodSharp } from "react-icons/io5";
import { MdLocationPin, MdOutlineChecklist } from "react-icons/md";
import { FaTags } from "react-icons/fa6";
import { BsBarChartSteps } from "react-icons/bs";
import Link from "next/link";
import LoadingPage from "../../loading";
import $ from "jquery";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { IoHome } from "react-icons/io5";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { GiMeal } from "react-icons/gi";

export default function MealDetail({ params }) {
  const { name, id } = params;
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const data = await getMealById(id);
      setData(data.meals[0]);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      $(".flex").fadeIn(500);
    }
  }, [data]);
  return (
    <>
      {data ? (
        <div
          className="flex flex-col gap-5 justify-start items-center relative top-14 p-5"
          style={{ display: "none" }}
        >
          <div className="w-full max-w-3xl px-2 sm:px-10 py-5 flex flex-col">
            <div className="flex w-full max-w-6xl justify-start items-center mb-1">
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
                <BreadcrumbItem
                  href={`/categories/${name}`}
                  startContent={<IoFastFoodSharp />}
                >
                  {name}
                </BreadcrumbItem>
                <BreadcrumbItem current startContent={<GiMeal />}>
                  {data?.strMeal}
                </BreadcrumbItem>
              </Breadcrumbs>
            </div>
            <div className="flex gap-2 justify-start items-center text-primary">
              <IoFastFoodSharp className="w-6 h-6" />
              <p className="text-xl sm:text-3xl font-semibold text-Arima mt-1">
                {data?.strCategory}
              </p>
            </div>
            <div className="w-full mb-3 sm:mb-5">
              <p className="text-2xl sm:text-5xl font-bold text-Arima">
                {data?.strMeal}
              </p>
              {data?.strSource && (
                <div className="flex gap-1">
                  <p>Source:</p>
                  <Link
                    href={data?.strSource}
                    className="hover:underline text-primary"
                    target="_blank"
                  >
                    Click Here
                  </Link>
                </div>
              )}
            </div>
            <div className="flex gap-2">
              <div className="flex flex-col gap-3 w-full">
                <div className="flex w-full rounded-lg overflow-hidden sm:h-full sm:h-min-[30rem]">
                  <Image
                    src={data?.strMealThumb}
                    alt={data?.strMeal}
                    width={500}
                    height={500}
                    className="w-full overflow-hidden h-full object-cover"
                  ></Image>
                </div>
                <div className="flex gap-5 text-primary">
                  <div className="flex gap-1">
                    <MdLocationPin className="w-5 h-5" />
                    <p className="text-md sm:text-lg mb-1 font-bold text-Arima">
                      {data?.strArea}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    {data?.strTags ? (
                      <>
                        <FaTags className="w-5 h-5" />
                        <p className=" text-md sm:text-lg mb-1 font-bold text-Arima">
                          {data?.strTags}
                        </p>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
              <div className="md:flex p-3 h-auto border-2 rounded-lg mb-5 justify-start items-start flex-col gap-1 hidden w-1/2">
                <div className="flex gap-1 justify-center items-center font-semibold">
                  <MdOutlineChecklist />
                  <h1>Ingredients</h1>
                </div>
                <ul>
                  {data &&
                    Array.from({ length: 20 }, (_, index) => (
                      <li key={index}>
                        {data[`strIngredient${index + 1}`] === "" ? (
                          ""
                        ) : (
                          <div className="flex gap-1">
                            <p>- {data[`strIngredient${index + 1}`]}</p>{" "}
                            <p>
                              {"("}
                              {data[`strMeasure${index + 1}`]}
                              {")"}
                            </p>
                          </div>
                        )}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="flex gap-7 text-primary mb-3"></div>
            <div className="flex flex-col md:flex-row gap-3 mb-3">
              <div className="p-3 border-2 rounded-lg mb-3 md:hidden">
                <div className="flex gap-1 justify-start items-center font-semibold mb-1">
                  <MdOutlineChecklist />
                  <h1>Ingredients</h1>
                </div>
                <ul>
                  {data &&
                    Array.from({ length: 20 }, (_, index) => (
                      <li key={index}>
                        {data[`strIngredient${index + 1}`] === "" ? (
                          ""
                        ) : (
                          <div className="flex gap-1">
                            <p>- {data[`strIngredient${index + 1}`]}</p>{" "}
                            <p>
                              {"("}
                              {data[`strMeasure${index + 1}`]}
                              {")"}
                            </p>
                          </div>
                        )}
                      </li>
                    ))}
                </ul>
              </div>
              <div className="p-3 border-2 rounded-lg">
                <div className="flex gap-1 justify-start items-center font-semibold mb-1">
                  <BsBarChartSteps />
                  <h1>Instructions</h1>
                </div>
                <ul>
                  {data?.strInstructions
                    ?.split("\r\n")
                    .map((instruction, index) => (
                      <li key={index}>
                        <div className="flex gap-1">
                          - <p key={index}>{instruction}</p>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="p-3 border-2 rounded-lg mb-5 w-full justify-center items-center">
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${
                  data?.strYoutube.split("v=")[1]
                }`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}
