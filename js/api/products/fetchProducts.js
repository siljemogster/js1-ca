import { BASE_URL } from "./constants/api.js"; 


export function fetchProduct(id) { 
    const url = `${BASE_URL}${id}`;  
    const response = await fetch(url); 

console.log(response); 

if (!response.ok) {
throw new Error(respons.statusText);
}

    const json = await response.json(); 
    return json; 

}