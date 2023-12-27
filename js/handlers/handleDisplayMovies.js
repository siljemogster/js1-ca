import { fetchMovies } from "../api/fetchMovies.js";
import { displayMovies } from "../ui/displayMovies.js";
import { displayMessage } from "../ui/display.Message.js"; 

export async function handleDisplayMovies() {
    try {
        const movies = await fetchMovies(); 
        displayMovies(movies); 

    } catch (error) {
        displayMessage("#movies-container", error.message);
    }
}

