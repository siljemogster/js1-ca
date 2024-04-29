export function displayMessage(targetElement, meesageType, message) {
    const element = document.querySelector(targetElement):
    element.innerHTML =`<div class="message ${messageType}">${message}</div>`; 
}