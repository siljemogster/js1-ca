import { createMovie } from "./createMovie.js";

export function displayMovies(movies) {
  const movieContainer = document.querySelector("#movies-container");

  movieContainer.innerHTML = "";

  movies.forEach(function (movie) {
    const movieDetails = createMovie(movie);
    movieContainer.append(movieDetails);
  });

  const addToCartButton = document.createElement("button"); 
  addToCartButton.classList.add("add-cta"); 
  addToCartButton.dataset.id = item.id; 
  addToCartButton.dataset.title = item.title;
  addToCartButton.dataset.price = item.price; 
  addToCartButton.dataset.action = "add-to-cart";
  addToCartButton.textContent = "Add to Cart"; 




}


