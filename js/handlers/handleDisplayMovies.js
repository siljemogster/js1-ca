import { fetchMovies } from "../api/fetchMovies.js";
import { displayMovieThumbnails } from "../ui/movies/displayMovieThumbnails.js";
import { displayMovies } from "../ui/movies/displayMovies.js";
import { displayMessage } from "../ui/shared/displayMessage.js";

export async function handleDisplayMovies() {
  try {
    const movies = await fetchMovies();
    displayMovies(movies);
    displayMovieThumbnails("#thumbs-container", movies);
  } catch (error) {
    displayMessage("#movies-container", error.message);
  }
}
