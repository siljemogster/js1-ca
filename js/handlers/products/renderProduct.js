export function displayProduct(targetElement, product) {
    const { name } = product; 
    document.title = `${name} | ${document.title}` ;  
}