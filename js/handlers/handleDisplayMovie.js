import { fetchMovie } from "/js/api/fetchMovie.js";
import { displayMovie } from "../ui/movies/displayMovie.js";
import { displayMessage } from "../ui/shared/displayMessage.js";
import  getQueryParam  from "/js/helper/getQueryParams.js";

export async function handleDisplayMovie() {
  const id = getQueryParam("id");

  if (!id) {
    window.location.href = "/";
  }

  try {
    const movie = await fetchMovie(id);
    displayMovie(movie);
  } catch (error) {
    displayMessage("movie-container", error.message, "error");
  }
}
