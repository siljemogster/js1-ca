export function displayMovieThumbnails(targetElement, movies) {
  const element = document.querySelector(targetElement);
  element.innerHTML = "";

  const thumbnailHtml = movies.map(function (movie) {
    return createHtmlForMovieThumbnail(movie);
  });

  thumbnailHtml.forEach(function (thumbnail) {
    const thumbnailContainer = document.createElement("div");
    thumbnailContainer.classList.add("thumbnail-container");
    thumbnailContainer.appendChild(thumbnail);
    element.appendChild(thumbnailContainer);
  });
}

function createHtmlForMovieThumbnail(movie) {
  const src =
    movie.images?.[0]?.thumbnail || "https://placehold.co/600x400/EEE/31343C";
  const alt = movie.images?.[0]?.alt || "No image available";

  const img = document.createElement("img");
  img.setAttribute("src", src);
  img.setAttribute("alt", alt);
  return img;
}
