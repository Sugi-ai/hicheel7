// const listData = [];
// const ul = document.querySelector("ul");

// const printInputValue = (value) => {
//   listData.push(value);
// };

let listData = [];
const ul = document.querySelector("ul");
const body = document.getElementsByTagName("body")[0];
const input = document.createElement("input");
const button = document.createElement("button");

button.innerText = "Click me";

const render = () => {
  ul.innerHTML = "";
  listData.map((element, index) => {
    const li = document.createElement("li");
    const removeBtn = document.createElement("button");
    removeBtn.innerText = "Delete";
    removeBtn.addEventListener("click", () => {
      const newListData = listData.filter((el, i) => {
        return i !== index;
      });
      listData = newListData;
      render();
    });
    li.innerText = element;
    li.appendChild(removeBtn);
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
