export function createMovie(movie) {

  const { title, image, description, id , price } = movie; 

  const movieElement = document.createElement("div");
  movieElement.classList.add("movie");

  const movieTitleElement = document.createElement("h2");
  movieTitleElement.textContent = title;

  const imageElement = document.createElement("img");
  imageElement.src = image;
  imageElement.alt = title;

  const movieDescriptionElement = document.createElement("p");
  movieDescriptionElement.textContent = description;

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
