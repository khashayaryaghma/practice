const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

// Fill Listeners
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

// Loop through empties and call drag events
for (const empty of empties) {
    empty.addEventListener("dragover", dragOver);
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener("dragleave", dragLeave);
    empty.addEventListener("dragdrop", dragDrop);
}

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

function dragOver() {
    
}

function dragEnter() {

}

function dragLeave() {

}

function dragDrop() {

}

