import { displayProducts }from ".handlers/displayProducts.js";

const { pathname } = location; 

console.log(pathname); 

switch(pathname) {
    case "/":
    case "/index.html":
    displayProducts();
    break; 
    case "/product.html":
    console.log("home");
    break; 
}

