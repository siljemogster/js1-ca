import { createMovie } from "../ui/displayMovie.js";

export function displayMovies(movies) {
  const movieContainer = document.querySelector("#movies-container");

  movieContainer.innerHTML = "";

  const loader = document.querySelector(".loader");
  if (loader) {
    loader.remove();
  }

  movies.forEach(function (movie) {
    const movieDetails = createMovie(movie);
    movieContainer.append(movieDetails);
  });
}
