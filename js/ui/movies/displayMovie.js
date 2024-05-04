export function displayMovie(movie) {
  document.name = `${movie.name} | ${document.title}`;

  const container = document.querySelector("#movie-container");

  container.innerHTML = "";

  const heading = document.createElement("h1");
  heading.innerText = movie.name;

  const image = document.createElement("img");

  if (movie.images && movie.images.length > 0) {
    image.src = movie.images[0].src;
    image.alt = movie.name;
  } else {
    image.src = "path/to/default/image.jpg";
    image.alt = "Default Image";
  }

  const description = document.createElement("p");
  description.innerHTML = movie.description;

  const price = document.createElement("p");
  price.innerText = `Price: ${movie.prices.currency_symbol} ${movie.prices.price}`;

  container.append(heading);
  container.append(image);
  container.append(description);
  container.append(price);
}
