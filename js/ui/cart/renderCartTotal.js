import * as storage from "../../helper/storage/index.js";

export function renderCartTotal() {
    const total = storage.getTotal(); 
    const container = document = document.querySelector("#cart"); 

    const totalDiv = document.createElement("div"); 
    totalDiv.classList.add("bg-gray-100"); 
    totalDiv.classList.add("p-4"); 
    totalDiv.classList.add("rounded"); 
    totalDiv.textContetn = `Total: ${total}`; 

    container.appendChild(totalDiv); 
    

}
