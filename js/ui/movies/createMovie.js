export function createMovie(movie) {
  console.log(movie);

  const { name, images, description, id, price } = movie;

  const image = images[0].src;

  const movieElement = document.createElement("div");
  movieElement.classList.add("movie");

  const movieTitleElement = document.createElement("h2");
  movieTitleElement.textContent = name;

  const imageElement = document.createElement("img");
  imageElement.src = image;
  imageElement.alt = name;

  const movieDescriptionElement = document.createElement("p");
  movieDescriptionElement.innerHTML = description;
  movieDescriptionElement.classList.add("centered-text");

  const link = document.createElement("a");
  link.classList.add("link");
  link.textContent = "View details";
  link.href = `movie.html?id=${id}`;

  movieElement.append(movieTitleElement);
  movieElement.append(imageElement);
  movieElement.append(movieDescriptionElement);
  movieElement.append(link);

  return movieElement;
}
