import * as storage from "../../helpers/storage/index.js";

export function handleAddToCartButtons() {
  const buttons = document.querySelectorAll('[data-action="add-to-cart]');

  console.log("Button clicked");

  buttons.forEach((button) =>
    button.addEventListener("click", handleCartClick)
  );
}

function handleCartClick(event) {
  console.log(event.target);

  const { id, title, price, image } = event.target.dataset;
  const item = { id, title, price, image  };
  console.log(item); 

  const cart = storage.getCart();
  cart.push(item);
  storage.saveCart(cart);
}
