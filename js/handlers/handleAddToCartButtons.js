import * as storage from "../helpers/storage/index.js"; 

export function handleAddToCartButtons() {
    const buttons = document.querySelectorAll('[data-action="add-to-cart]'); 

   
    console.log("Button clicked"); 
    
    buttons.forEach(button => button.addEventListener("click", handleCartClick)); 
}

function handleCartClick(event) {
    const { id, title, prive } = event.target.dataset; 
    const item = {id, title, price}; 
    const cart = storage.getCart(); 
    cart.push(item);
    storage.saveCart(cart);  
  
}
   
