import { fetchProducts } from "../../api/fetchProducts.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import { renderProducts } from "../../ui/products/renderProducts.js";

export async function displayProducts() {
  console.log("displayProducts");
  try {
    const products = await fetchProducts();
    console.log(products);
    renderProducts("#product-contatiner", products);
  } catch (error) {
    displayMessage("error", "There was an error fetching the movies");
  }
}
