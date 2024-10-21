import axios from "axios";

export async function getFoodsCategories() {
  const response = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );

  return response.data;
}

export async function getFoodsByCategoryName(name) {
  const response = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
  );
  return response.data;
}

export async function getMealById(id) {
  const response = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  return response.data;
}
