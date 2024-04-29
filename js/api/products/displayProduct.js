import { fetchProduct } from ".../api/products/fetchProducts.js"; 
import { displayMessage } from "../../ui/common/displayMessage.js"; 

export async function displayProduct() {
    const search = window.location.search; 
    const params = new URLSearchParams(search); 
    const id = params.get("id"); 

    if(!id) {
      return (location.href = "/"); 
    }




    console.log("displayProducts");
    try {
        const product = await fetchProduct(id); 
        console.log(product); 
        renderProduct("#product-container", product);

        renderProduct("#product-container", product); 
       
        
    }
    catch(error) {
        displayMessage("#product-container", "error", "There was an error fetching products");

    }


}