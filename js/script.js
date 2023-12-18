const url = "htttps://api.noroff.dev/api/v1/square-eyes";

async function getMovies() {


try {

    const response = await fetch(url);
    const movies = await response.json();
    //console.log(movies); 

    const resultsContainer = document.querySelector("#container");

    resultsContainer.innerHTML =""; 

    movies.forEach(function (movie) {
        console.log(movie); 

        resultsContainer.innerHTML += `<div class="card">
                                          <h3>${movie.title}</h3>
                                          <p>Description: ${movie.description}</p>
                                          <p>Genre: ${movie.genre}</p>
                                          <p>Released: ${movie.released}</p>
                                          <p>Price: ${movie.price}</p>
                                          <a href="movie.html?id=${movie.id}">View details</a>
                                       </div>`; 



});
}


catch(error) {
    console.log(error);
    const resultsContainer = document.querySelector("#container");
    resultsContainer.innerHTML ='<div class="error">An error occured when calling the movies API';

}
}
getMovies(); 