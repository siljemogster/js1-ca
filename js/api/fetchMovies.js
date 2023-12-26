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

