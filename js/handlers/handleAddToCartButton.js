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

  const { id, name, price, img } = event.target.dataset;
  const item = { id, name, price, img };

  storage.addItemToCart(item);
  renderItemCount();
}