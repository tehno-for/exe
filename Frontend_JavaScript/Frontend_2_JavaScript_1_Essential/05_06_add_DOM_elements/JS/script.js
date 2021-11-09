const FEATURED = document.querySelector(".featured-image");
const THEIMAGE = FEATURED.querySelector("img");

var altText = THEIMAGE.getAttribute("alt");

// Create element itself --- createElement();
var captionElement = document.createElement("figcaption");

// Create the text node tha goes inside the element --- createTextNode();
var captionText = document.createTextNode(altText);

//Add the text node to thee element
captionElement.appendChild(captionText);

//Add the element to the DOM tree --- appendChild();
FEATURED.appendChild(captionElement);

THEIMAGE.setAttribute("alt", "");

//console.log(captionElement);
