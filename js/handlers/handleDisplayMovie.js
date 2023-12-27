import { fetchMovie } from "../api/fetchMovie.js";
import { displayMovie } from "../ui/displayMovie.js"; 
import { displayMessage } from "../ui/display.Message.js";
import getQueryParam from "../helper/getQueryParam.js";

export async function handleDisplayMovie() {
    const id = getQueryParam("id");

    if (!id) {
        window.location.href = "/"; 
    }

    try {
        const movie = await fetchMovie(id); 
        console.log(movie); 
        displayMovie(movie); 
    } catch (error) {
        displayMessage("movie-container", error.message); 
    }
}


