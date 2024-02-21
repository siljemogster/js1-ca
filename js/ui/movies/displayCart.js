import * as storage from "../../helper/getQueryParam";

export function displayCart() {
  const cart = storage.getCart();
  const container = document.querySelector("#cart");

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty</p>";
    return;
  }


 /*cart.forEach((item) => {
    const cartItem = createCartItem(item);
    container.appendChild(cartItem); 
  }); */

const itemHtml = cart.map(item => createCartItem(item)); 
console.log(itemHtml); 
console.log(...itemHtml); 

//container.append(...itemHtml); 

//const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price), 0);

}

function createCartItem(item) {
  const div = document.createElement("div");
  div.classList.add("cart-item");

  const title = document.createElement("h5");
  title.textContent = item.title;

  const price = document.createElement("p");
  title.textContent = item.price;

  div.appendChild(title);
  div.appendChild(price);

  return div;
}
