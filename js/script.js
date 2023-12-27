import { url } from "./constants.js"; 

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

    const loader = document.querySelector('.loader');
    if (loader) {
    loader.remove(); 
}

    movies.forEach(function (movie) {

        const movieDetails = createMovie(movie)
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

function createMovie(movie) {
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
