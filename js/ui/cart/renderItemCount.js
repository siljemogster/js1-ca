import * as storage from "../../helpers/storage/index.js";

export function renderItemCount() {
  const itemCount = storage.getItemCount();
  const container = document.querySelector("#item-count");
}
