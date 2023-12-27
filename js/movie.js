import { url } from "./constants.js"; 

const queryString = document.location.search; 
const params = new URLSearchParams(queryString);
const id = params.get("id");



async function fetchMovie(id) {
  const detailUrl = `${url}/${id}`;
 

  try {
    const response = await fetch(detailUrl);
    const result = await response.json();  
    displayMovie(result); 
  }

  catch(error) {
    console.error(error); 
    const container = document.querySelector("#movie-container"); 
    container.innerHTML = '<div class="error">There was an error fetching the movie</div>'; 
  } 
}



fetchMovie(id);


function displayMovie(movie) {
    document.title = movie.title; 

  const container = document.querySelector("#movie-container"); 

  container.innerHTML = "";

  const loader = document.querySelector('.loader');
  if (loader) {
  loader.remove(); 
}

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







/*const queryString = document.location.search; 
const params = new URLSearchParams(queryString); 
const id = params.get("id");  


if (!id) {
  document.location.href = "/";
}

const url =`${url}/${id}`;
console.log(url); 

async function fetchMovie() {
  const url = `${url}/${id}`; 

  try {
    const response = await fetch(url);


    const result = await response.json(); 
    displayMovie(result);
    
    
  } catch(error) {
    console.error(error); 
    const container = document.querySelector("#movie-container"); 
    container.innerHTML = '<div class="error">There was an error fetching the movie</div>'; 
  }
}

fetchMovie(id);

function displayMovie(movie) {

  document.title = `${movie.title} | ${document.title}`;
  const container = document.querySelector("#movie-container");

  container.innerHTML = ""; 

  const heading = document.createElement("h1"); 
  heading.innerText = movie.title; 

  const description = document.createElement("p");
  description.innerText = movie.description; 

  container.append(heading);
  container.append(description);

} 




/*const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
  document.location.href = "/";
}

const url = `https://api.noroff.dev/api/v1/square-eyes/${id}`;

async function getMovies() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    const container = document.querySelector("#movie-details");

    container.innerHTML = `<div class="movie-card">
                               <h2>${details.title}</h2>
                               <img src="${details.image}" alt="${details.title}" />
                                             </div>`;

    console.log(details);
  } catch (error) {
    console.log(error);
    const container = document.querySelector("#movie-details");
    container.innerHTML = `<div class="error">An error occured when calling the movies APi</div>`;
  }
}

getMovies(); */
