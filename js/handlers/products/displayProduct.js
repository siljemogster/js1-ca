import { fetchProduct } from "../../api/fetchProducts.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import { displayMovie } from "../../ui/movies/displayMovie.js";

export async function displayProduct() {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const id = params.get("id");

  if (!id) {
    return (location.href = "/");
  }

  try {
    const product = await fetchProduct(id);
    console.log(product);
    displayMovie("#product-container", product);
  } catch (error) {
    displayMessage("error", "There was an error fetching the movies");
  }
}
console.log("product:", product); 
