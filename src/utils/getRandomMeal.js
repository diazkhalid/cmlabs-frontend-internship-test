import {
  getFoodsByCategoryName,
  getFoodsCategories,
} from "@/services/foodsCategories";
import axios from "axios";

export async function getRandomMeal() {
  const categories = await getFoodsCategories();

  const randomCategory =
    categories.categories[
      Math.floor(Math.random() * categories.categories.length)
    ];

  const foodsByCategory = await getFoodsByCategoryName(
    randomCategory.strCategory
  );

  const randomMeal =
    foodsByCategory.meals[
      Math.floor(Math.random() * foodsByCategory.meals.length)
    ];

  return { randomMeal, randomCategory };
}
