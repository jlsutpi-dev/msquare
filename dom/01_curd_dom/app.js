// DOM CRUD

// create
const h1Tag = document.createElement("h1");
const textContext = document.createTextNode("Hello Myanmar");

const h1 = h1Tag.appendChild(textContext);

const body = document.getElementsByTagName("body")[0];
body.appendChild(h1);

// read
console.log(h1.textContent);

// update
h1.textContent = "Hello Yangon";

// delete
h1.remove();
