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


function createCartItem(item) {
  const { title, price, id, image } = item;

  const div = document.createElement("div");
  div.classList.add("cart-item");
  div.classList.add(bg-gray-100"); 
  div.classList.add("p-4"); 
  div.classList.add("rounded"); 

  const titleContainer = document.createElement("h5");
  titleContainer.textContent = title;
  titleContainer.classList.add("text-lg");
  titleContainer.classList.add("font-bold"); 

  const priceContainer = document.createElement("p");
  priceContainer.textContent = price;
  priceContainer.classList.add("text-gray-500"); 

  const img = document.createElement("img");
  img.src = image;
  img.alt = title;

  div.appendChild(priceContainer);
  div.appendChild(titleContainer);
  div.appendChild(img);

  return div;
}
