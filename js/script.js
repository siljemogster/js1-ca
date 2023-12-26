import { url } from "./constants.jsss"; 

async function fetchMovies () {
    try {
        const response = await fetch(url);
    const json = await response.json();
    displayMovies(json);
    }
    catch(error) {
        const movieContainer = document.querySelector("#movies-container");
        movieContainer.innerHTML = '<div class="error">There was an error fetching the movies</div>';
        console.error(error);
    }      
}

fetchMovies();





function displayMovies(movies) {
    const movieContainer = document.querySelector("#movies-container"); 

    movieContainer.innerHTML ="";

    movies.forEach(function (movie) {

        const movieDetails = createMovies(movie)
        movieContainer.append(movieDetails); 




       // movieContainer.innerHTML += `<div class="movie">
         //                                <h3>${movie.title}</h3>
           //                              <p>${movie.description}</p>
             //                            <p>${movie.genre}</p>
               //                          <p>${movie.released}</p>
                 //                        <p>${movie.rating}</p>
                   //                      <p>$${movie.price}</p>             
                     //                  </div>`;
    });

}

function createMovies(movie) {
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie");
    
        const movieTitleElement = document.createElement("h3");
        movieTitleElement.textContent = movie.title;
    
        const movieDescriptionElement = document.createElement("p");
        movieDescriptionElement.textContent = movie.description;
    
        const movieGenreElement = document.createElement("p");
        movieGenreElement.textContent = movie.genre;
    
        const movieReleasedElement = document.createElement("p");
        movieReleasedElement.textContent = movie.released;
    
        const movieRatingElement = document.createElement("p");
        movieRatingElement.textContent = movie.rating;
    
        const moviePriceElement = document.createElement("p");
        moviePriceElement.textContent = movie.price;
    
        movieElement.append(movieTitleElement);
        movieElement.append(movieDescriptionElement);
        movieElement.append(movieGenreElement);
        movieElement.append(movieReleasedElement);
        movieElement.append(movieRatingElement);
        movieElement.append(moviePriceElement);
    

    return movieElement;
 
}






/* const url = "https://api.noroff.dev/api/v1/square-eyes";

async function getMovies() {


try {

    const response = await fetch(url);
    const movies = await response.json();
    //console.log(movies); 

    const resultsContainer = document.querySelector("#container");

    resultsContainer.innerHTML =""; 

    movies.forEach(function (movie) {
    /* console.log(movie); 

        resultsContainer.innerHTML += `<div class="card">
                                          <h3>${movie.title}</h3>
                                          <p>Description: ${movie.description}</p>
                                          <p>Genre: ${movie.genre}</p>
                                          <p>Released: ${movie.released}</p>
                                          <p>Price: ${movie.price}</p>
                                          <a href="movie.html?id=${movie.id}">View details</a>
                                       </div>`; 
    const div = document.createElement("div");  
    div.classList.add("product")    
    
    const heading = document.createElement("h3");
    heading.innerText =product.title; 

    div.append(heading);

    productContainer.append(div);



});
}


catch (error) {
    console.log(error);
    const resultsContainer = document.querySelector("#container");
    resultsContainer.innerHTML ='<div class="error">An error occured when calling the movies API';

}
}
getMovies(); */ 
