export function displayMovie(movie) {
  document.title = `${movie.title} | ${document.title}`;

  const container = document.querySelector("#movie-container");

  container.innerHTML = "";

  const heading = document.createElement("h1");
  heading.innerText = movie.title;

  const image = document.createElement("img");
  image.src = movie.image;
  image.alt = movie.title;

  const description = document.createElement("p");
  description.innerText = movie.description;

  const genre = document.createElement("p");
  genre.innerText = `Genre: ${movie.genre}`;

  const rating = document.createElement("p");
  rating.innerText = `Rating: ${movie.rating}`;

  const released = document.createElement("p");
  released.innerText = `Year: ${movie.released}`;

  const price = document.createElement("p");
  price.innerText = `Price: $${movie.price}`;

  const addToCartButton = document.createElement("button"); 
  addToCartButton.classList.add("add-cta"); 
  addToCartButton.dataset.id = movie.id; 
  addToCartButton.dataset.title = movie.title;
  addToCartButton.dataset.price = movie.price; 
  addToCartButton.dataset.action = "add-to-cart";
  addToCartButton.textContent = "Add to Cart"; 

  
  

  container.append(heading);
  container.append(image);
  container.append(description);
  container.append(genre);
  container.append(rating);
  container.append(released);
  container.append(price);
  container.append(addToCartButton);
  
}
