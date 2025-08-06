// const listData = [];
// const ul = document.querySelector("ul");

// const printInputValue = (value) => {
//   listData.push(value);
// };

const listData = [];
const ul = document.querySelector("ul");
const body = document.getElementsByTagName("body")[0];
const input = document.createElement("input");
const button = document.createElement("button");

button.innerText = "Click me";

const render = () => {
  ul.innerHTML = "";
  listData.map((element) => {
    const li = document.createElement("li");
    li.innerText = element;
    ul.appendChild(li);
  });
};

function printInputValue(value) {
  listData.push(value);
}

button.addEventListener("click", () => {
  printInputValue(input.value);
  render();
});

body.appendChild(input);
body.appendChild(button);
