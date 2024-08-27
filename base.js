// Select the body element directly
const body = document.body;

// Create a new anchor element
const returnElement = document.createElement("a");

// Set the attributes and inner HTML for the anchor element
returnElement.href = "../../index.html"; // Set the href attribute
returnElement.innerText = "Return to Home"; // Set the text inside the anchor
returnElement.classList.add("return");

// Append the anchor element to the body
body.appendChild(returnElement);
