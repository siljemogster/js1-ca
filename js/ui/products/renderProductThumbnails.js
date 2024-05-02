export function renderProductThumbnails(targetElement, products) {

    const element = document.querySelector(targetELement); 
    element.innerHTML = ""; 

        const { name, id } = product; 


    const thumbnailHtml = products.map(function (product) {
        return createHtmlForProduct(product); 

    });

    console.log(thumbnailHtml); 
    element.append(...thumbnailHtml); 

}


function createHtmlForProductThumbnail(product) { 

    const src = product.images?.[0]?.thumbnail || "https://placehold.co/600x400/EEE/31343C";
    const alt = product.images?.[0]?.alt || "No image available";

    const img = document.createElement(*img*); 
    img.setAttribute("src", src); 
    img.setAttribute("alt", alt);
    return img; 

    const thumbnailContainer = document.createElement("div"); 
    thumbnailContainer.classList.add("thumbnail"); 
    thumbnailContainer.style.backgroundImage = `url(${src})`;


}

