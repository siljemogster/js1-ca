import { url } from "./constants.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
  document.location.href = "/";
}

async function fetchMovie(id) {
  const detailUrl = `${url}/${id}`;

  try {
    const response = await fetch(detailUrl);
    const result = await response.json();
    displayMovie(result);
  } catch (error) {
    console.error(error);
    const container = document.querySelector("#movie-container");
    container.innerHTML =
      '<div class="error">There was an error fetching the movie</div>';
  }
}

fetchMovie(id);

function displayMovie(movie) {
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

  container.append(heading);
  container.append(image);
  container.append(description);
  container.append(genre);
  container.append(rating);
  container.append(released);
  container.append(price);
}
