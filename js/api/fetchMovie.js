import { url } from "../constants.js";

export async function fetchMovie(id) {
  const detailUrl = `${url}/${id}`;

  const response = await fetch(detailUrl);

  if (response.ok) {
    const results = await response.json();
    return results;
  }

  throw new Error("There was an error fetching the movie with id: ${id}");
}
