const queryString = document.location.search;
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

getMovies(); 