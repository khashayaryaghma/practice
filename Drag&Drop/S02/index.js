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
function createlist() {
  [...richestPeople].map((person, index) => {
    const listItem = document.createElement("li");

    listItem.setAttribute("data-index", index);

    listItem.innerHTML = `<span class = "number">${
      index + 1
    }</span> <div class="dragable" draggable="true"><p class="person-name">${person}</p> <i class="fas fa-grip-lines"></i></div> `;

    listItems.push(listItem);

    draggable_list.appendChild(listItem)
  });
}
