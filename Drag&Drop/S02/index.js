const draggable_list = document.getElementById("draggable-list");
const check = document.getElementById("check");

const richestPeople = [
  "Jeff Bezos",
  "Bill Gates",
  "Warren Buffett",
  "Bernard Arnault",
  "Carlos Slim Helu",
  "Amancio Ortega",
  "Larry Ellison",
  "Mark Zuckerberg",
  "Michel Bloomberg",
  "Larry Page",
];

// Store listitems
const listItems = [];

let dragStartIndex;

createList();

// Insert list items into DOM
function createList() {
  [...richestPeople]
    .map((a) => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .map((person, index) => {
      const listItem = document.createElement("li");

      listItem.setAttribute("data-index", index);

      listItem.innerHTML = `<span class = "number">${
        index + 1
      }</span> <div class="draggable" draggable="true"><p class="person-name">${person}</p> <i class="fas fa-grip-lines"></i></div> `;

      listItems.push(listItem);

      draggable_list.appendChild(listItem);
    });

  events();
}

function events() {
  const draggables = document.querySelectorAll(".draggable");
  const dragListItems = document.querySelectorAll(".draggable-list li");

  draggables.map((draggable) => {
    draggable.addEventListener("dragstart", dragStart);
  });

  dragListItems.map((item) => {
    item.addEventListener("dragover", dragOver);
    item.addEventListener("drop", drop);
    item.addEventListener("dragenter", dragEnter);
    item.addEventListener("dragleave", dragLeave);
  });
}

function dragStart(){

}
function dragEnter() {

}
function dragLeave() {

}
function dragOver() {

}
function drop() {

}
