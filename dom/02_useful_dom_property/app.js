// const parent = document.getElementsByClassName("parent")[0];
// const child = document.getElementsByClassName("child");
// const divWithId = document.getElementById("myId");

// console.log(parent);
// console.log(child);
// console.log(divWithId);

// // useful class
// // parent.innerHTML = "";

//    <div class="parent">
//       <div class="child">Child one</div>
//       <div class="child">Child two</div>
//     </div>

//(beginner create div with child )

// const parentDiv = document.createElement("div");
// parentDiv.classList.add("parent");

// const child1 = document.createElement("div");
// const child1Text = document.createTextNode("Child One");
// child1.classList.add("child");
// child1.appendChild(child1Text);

// const child2 = document.createElement("div");
// const child2Text = document.createTextNode("Child Two");
// child2.classList.add("child");
// child2.appendChild(child2Text);

// parentDiv.appendChild(child1);
// parentDiv.appendChild(child2);

// const body = document.getElementsByTagName("body")[0];
// body.appendChild(parentDiv);

// create div with child advanced
// const parent = document.createElement("div");
// parent.classList.add("parent");

// const child = document.createElement("div");
// child.append("Child One");
// child.classList.add("child", "hello");
// console.log(child.classList);
// child.classList.remove("hello");

// const child2 = document.createElement("div");
// child2.append(" Child Two");

// parent.append(child, child2);

// const body = document.getElementsByTagName("body")[0];
// body.append(parent);

//style ( only internal )
// const box = document.getElementsByClassName("box")[0];
// console.log("box's style width :", box.style.width);
// console.log("box's style height :", box.style.height);
// console.log("box's style background-color :", box.style.backgroundColor);

// get external style properties

const box = document.getElementsByClassName("box")[0];
console.log("box's style width :", getComputedStyle(box).width);
console.log("box's style height :", getComputedStyle(box).height);
console.log(
  "box's style background-color :",
  getComputedStyle(box).backgroundColor
);
