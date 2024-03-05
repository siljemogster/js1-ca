import * as storage from "../../helpers/storage/index.js";

export function renderCart() {
  const cart = storage.getCart();
  const container = document.querySelector("#cart");

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty</p>";
    return;
  }

  renderCartTotal(); 

  cart.forEach((item) => {
    const cartItem = createCartItem(item);
    container.appendChild(cartItem);
  });
}

function createCartItem(item) {
  const { title, price, id, quantity, image } = item;

  const div = document.createElement("div");
  div.classList.add("cart-item");
  div.classList.add("bg-gray-100");
  div.classList.add("p-4");
  div.classList.add("rounded");

  const titleContainer = document.createElement("h5");
  titleContainer.textContent = title;
  titleContainer.classList.add("text-lg");
  titleContainer.classList.add("font-bold");

  const priceContainer = document.createElement("p");
  priceContainer.textContent = price;
  priceContainer.classList.add("text-gray-500");

  const quantityContainer = document.createElement("p");
  quantityContainer.textContent = `Quantity: ${quantity}`;
  quantityContainer.classList.add("text-gray-500");

  const img = document.createElement("img");
  img.src = image;
  img.alt = title;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("bg-red-200");
  deleteButton.classList.add("text-white");
  deleteButton.classList.add("px-4");
  deleteButton.classList.add("py-2");
  deleteButton.classList.add("rounded");
  deleteButton.dataset.id = id;

  deleteButton.addEventListener("click", (event) => {
    const { id } = event.target.dataset;
    storage.removeItemFromCart(id);
  });

  div.appendChild(priceContainer);
  div.appendChild(titleContainer);
  div.appendChild(img);
  div.appendChild(deleteButton);
  div.appendChild(quantityContainer);

  return div;
}
