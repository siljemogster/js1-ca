export function createMovie(movie) {
  const movieElement = document.createElement("div");
  movieElement.classList.add("movie");

  const movieTitleElement = document.createElement("h2");
  movieTitleElement.textContent = movie.title;

  const image = document.createElement("img");
  image.src = movie.image;
  image.alt = movie.title;

  const movieDescriptionElement = document.createElement("p");
  movieDescriptionElement.textContent = movie.description;

  const link = document.createElement("a");
  link.classList.add("link");
  link.textContent = "View details";
  link.href = `movie.html?id=${movie.id}`;

  movieElement.append(movieTitleElement);
  movieElement.append(image);
  movieElement.append(movieDescriptionElement);
  movieElement.append(link);

  return movieElement;
}
