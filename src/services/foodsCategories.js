import axios from "axios";

export async function getFoodsCategories() {
  const response = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );

  return response.data;
}
