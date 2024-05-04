import { createMovie } from "./createMovie.js";

export function displayMovies(movies) {
  const movieContainer = document.querySelector("#movies-container");

  movieContainer.innerHTML = "";

  movies.forEach(function (movie) {
    const movieDetails = createMovie(movie);
    movieContainer.append(movieDetails);
  });
}