import { fetchProducts } from ".../api/products/fetchProducts.js"; 
import { displayMessage } from "../../ui/common/displayMessage.js"; 
import { renderProducts } from "../../ui/products/renderProducs.js"; 
import { renderProductThumbnails } from "./renderProductThumbnails.js";

export async function displayProducts() {
    console.log("displayProducts");
    try {
        const products = await fetchProducts(); 
        console.log(products); 
        renderProducts("#product-container", products);
        renderProductThumbnails("#thumbnails-container", products); 
        
    }
    catch(error) {
        displayMessage("#products-container", "error", "There was an error fetching products");

    }


}