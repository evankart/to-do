// COMPLETE: Create an array to hold all the items on the list
let listArray = ["apples", "bananas", "hot dogs"];
const listHTML = document.getElementById("to-do-list");

for (let i = 0; i < listArray.length; i++) {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(listArray[i]));

  // TO DO: Add a close button to each element added to the list
  let span = document.createElement("span"); // creates a new span element
  let txt = document.createTextNode("X"); // creates a new text node with the 'x' character
  span.className = "close"; // gives the x a class of 'close'
  span.appendChild(txt); // makes '  X' the text child of the span element
  li.appendChild(span); // appends the new span element to the relevant item in the list
  listHTML.appendChild(li);
}

//------------------------------------------------------------

document.querySelector("input").addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    addToList(); // Adds the item to the list when the enter key is pressed
  }
});

//COMPLETE: when you click 'add to list', the value is added to the array
const addBtn = document.getElementById("btn");
addBtn.addEventListener("click", addToList); // when the button is clicked, addToList function runs
function addToList() {
  newItem = document.getElementById("new-item").value;
  if (newItem != "") {
    listArray.push(newItem);

    //TO DO: after the new value is added to the array, the list is refreshed
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(newItem));
    let span = document.createElement("span"); // creates a new span element
    let txt = document.createTextNode("X"); // creates a new text node with the 'x' character
    span.className = "close"; // gives the x a class of 'close'
    span.appendChild(txt); // makes '  X' the text child of the span element
    li.appendChild(span); // appends the new span element to the relevant item in the list;
    listHTML.prepend(li);

    document.getElementById("new-item").value = "";

    //TO DO: Add event handlers that remove the relevant list item when the delete button is pressed.
    // When you click on the X the item next to it is removed
    let spanTag = document.getElementsByClassName("close");
    for (i = 0; i < spanTag.length; i++)
      spanTag[i].onclick = function () {
        this.parentNode.remove(this);
      };

    $("#new-item").removeClass("red-border");
  } else {
    $("#new-item").addClass("red-border");
    console.log("red border");
  }
}

//TO DO: Add event handlers that remove the relevant list item when the delete button is pressed.
// When you click on the X the item next to it is removed
let spanTag = document.getElementsByClassName("close");
for (i = 0; i < spanTag.length; i++)
  spanTag[i].onclick = function () {
    this.parentNode.remove(this);
  };

//TO DO: Button to clear all items from the list
const clear = document.getElementById("remove-item");
clear.onclick = function () {
  listHTML.innerHTML = "";
};

//TO DO: Refactor the code, make it easier for me to understand

//TO DO: Drag and Drop Items?
