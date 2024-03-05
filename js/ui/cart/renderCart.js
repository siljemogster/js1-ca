import * as storage from "../../helpers/storage/index.js"; 

export function renderCart() {
    const cart = storage.getCart(); 
    const container = document.querySelector("#cart"); 

    if (cart.length === 0) {
        container.innerHTML = "<p>Your cart is empty</p>"; 
        return; 
    }

    cart.forEach((item) => {
        const cartItem = createCartItem(item); 
        container.appendChild(cartItem); 
    }); 

}



