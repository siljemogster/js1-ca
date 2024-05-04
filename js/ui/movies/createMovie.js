export function createMovie(movie) {

  const { name, img, description, id , price } = movie; 

  const movieElement = document.createElement("div");
  movieElement.classList.add("movie");

  const movieTitleElement = document.createElement("h2");
  movieTitleElement.textContent = name;

  const imageElement = document.createElement("img");
  imageElement.src = img;
  imageElement.alt = name;

  const movieDescriptionElement = document.createElement("p");
  movieDescriptionElement.textContent = description;

  const link = document.createElement("a");
  link.classList.add("link");
  link.textContent = "View details";
  link.href = `movie.html?id=${id}`;


  const addToCartButton = document.createElement("button"); 
  addToCartButton.classList.add("add-cta"); 
  addToCartButton.dataset.id = id; 
  addToCartButton.dataset.name = name;
  addToCartButton.dataset.price = price; 
  addToCartButton.dataset.action = "add-to-cart";
  addToCartButton.textContent = "Add to Cart"; 

  movieElement.append(movieTitleElement);
  movieElement.append(imageElement);
  movieElement.append(movieDescriptionElement);
  movieElement.append(link);
  

  return movieElement;
}
