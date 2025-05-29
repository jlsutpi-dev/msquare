const button = document.getElementsByTagName("button")[0]; // HTMLCollection
const image = document.getElementsByClassName("photo")[0]; // HTMLCollection

// const myFunction2 = () => {
//   console.log("click fun 2!");
//   button.style.backgroundColor = "white";
//   button.style.color = "red";
// };

// // button.onclick = myFunction;
// // button.onclick = myFunction2;

// // button.addEventListener("click", myFunction);
const sourceImg = image.src;

const imagesArr = [
  "https://i.pinimg.com/736x/58/6c/ea/586ceac3cd0a68c9744db42c5d94349a.jpg",
  "https://i.pinimg.com/736x/da/c7/8d/dac78da392e3f496545628161a66ea92.jpg",
  "https://i.pinimg.com/736x/71/9b/95/719b956bc295421f25536fb24e6273a0.jpg",
  "https://i.pinimg.com/736x/e4/4e/43/e44e43168b35c2b61429628b95f26c4d.jpg",
  "https://i.pinimg.com/736x/13/1d/de/131dde94c7065c366c04f2422f6e5942.jpg",
];

// const myFunction = () => {
//   console.log("click button!");
// };
let counter = 0;
button.addEventListener("click", () => {
  if (counter > imagesArr.length - 1) {
    image.src = sourceImg;
    counter = 0;
    return;
  }
  image.src = imagesArr[counter];
  counter += 1;
});
