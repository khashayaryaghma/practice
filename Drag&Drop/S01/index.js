const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

// Fill Listeners
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

// Drag Functions
function dragStart() {
  this.classList.add("hold");
  setTimeout(() => {
    this.classList.add("invisible");
  }, 0);
}

function dragEnd() {
  this.classList.remove("invisible");
  this.classList.remove("hold");
  this.classList.add("fill");
}
