import { fetchMovies } from "../api/fetchMovies.js";
import { displayMovies } from "../ui/movies/displayMovies.js";
import { displayMessage } from "../ui/shared/displayMessage.js";

export async function handleDisplayMovies() {
  try {
    const movies = await fetchMovies();
    displayMovies(movies);
  } catch (error) {
    displayMessage("#movies-container", error.message);
  }
}
