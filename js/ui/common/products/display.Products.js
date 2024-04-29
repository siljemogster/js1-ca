export function renderProducts(targetElement, products) {

    const element = document.querySelector(targetElement); 
    element.innerHTML = ""; 

    const productHtml = products.map(function (product) {
        return createHtmlForProduct(product); 

    });

    console.log(productHtml);
    element.append(...productHtml);
}

function createHtmlForProduct(product) {
    const { name, id } = product;
    const productItem = document.createElement("a"); 
        productItem.classList.add("product"); 
        productItem.setAttribute("href" , `product.html?id=${id}`); 
        const title = document.createElement("h4");
        title.innerText = name; 
        productItem.appendChild(title); 
        return productItem; 

}