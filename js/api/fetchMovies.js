import { url } from "../constants.js"; 

export async function fetchMovies () {
        const response = await fetch(url);

        if (response.ok) {
            const results = await response.json();
            return results; 
        }

        throw new Error("There was an error fetching the movies"); 

    }


 

