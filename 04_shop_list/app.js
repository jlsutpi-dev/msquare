const inputTag = document.getElementsByClassName("form-control")[0]; //  HTMLCollection
const productContainer =
  document.getElementsByClassName("product_container")[0]; // HTMLCollection

let id = 1;
inputTag.addEventListener("change", (e) => {
  const spanTag = document.createElement("span");
  const productName = document.createElement("div");
  const iconTag = document.createElement("i");
  const parentContainer = document.createElement("div");

  // <i class="fa-solid fa-trash"></i>

  productName.classList.add("product_name");
  iconTag.classList.add("fa-solid", "fa-trash");
  parentContainer.classList.add("parent_container");

  productName.addEventListener("click", () => {
    const classExist = productName.classList.contains("purchased");
    if (classExist) {
      productName.classList.remove("purchased");
    } else {
      productName.classList.add("purchased");
    }
  });

  iconTag.addEventListener("click", () => {
    parentContainer.remove();
  });

  spanTag.classList.add("spanTag");
  spanTag.id = id;

  const inputValue = e.target.value;

  spanTag.append(id, ". ", inputValue);
  //   productContainer.append(spanTag);
  productName.append(spanTag);
  parentContainer.append(productName, iconTag);
  productContainer.append(parentContainer);

  inputTag.value = "";
  id += 1;
});
