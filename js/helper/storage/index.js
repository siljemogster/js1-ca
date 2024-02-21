export function getCart() {
    return JSON.parse(localSTorage.getItem("cart")) || []; 
}


export function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart)); 
}
