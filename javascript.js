// ADD ITEMS TO LIST //
const addToList = document.getElementById("btn");
addToList.addEventListener("click", myFunction); // when the button is clicked, myFunction runs

function myFunction() {
  const node = document.createElement("li"); // creates a new list node
  const textnode = document.getElementById("new-item").value; // creates a new text node with the value from the input field
  node.innerHTML = "<li>" + textnode + "</li>"; // places the input field value into <li> tags and places it in the newly created node
  document.getElementById("to-do-list").appendChild(node); // appends the new node to the "to-do-list" element (adds an item to the unordered list)
  document.getElementById("new-item").value = ""; // returns the input value to "" so a new item can be added

  // TO DO: Add a close button to each element added to the list
  let span = document.createElement("span"); // creates a new span element
  let txt = document.createTextNode("  X"); // creates a new text node with the 'x' character
  span.className = "close"; // gives the x a class of 'close'
  span.appendChild(txt); // makes '  X' the text child of the span element
  document.getElementById("to-do-list").appendChild(span); // appends the new span element to the relevant item in the list
}

// REMOVE FIRST ITEM FROM LIST //
const removeItem = document.getElementById("remove-item");
removeItem.addEventListener("click", removeFunction); // when the button is clicked, removeFunction runs

function removeFunction() {
  const removeItem = document.getElementsByTagName("li")[0];
  const containerElement = removeItem.parentNode;
  containerElement.removeChild(removeItem);
}

// Add an 'x' next to each item on the list
let myToDoList = document.getElementsByTagName("li"); // returns an array of all the items in the list
let i;
for (let i = 0; i < myToDoList.length; i++) {
  // loops over all the items in the list
  let span = document.createElement("span"); // creates a new span element
  let txt = document.createTextNode("  X"); // creates a new text node with the 'x' character
  span.className = "close"; // gives the x a class of 'close'
  span.appendChild(txt); // makes '  X' the text child of the span element
  myToDoList[i].appendChild(span); // appends the new span element to the relevant item in the list
}

// When you click on the X the item next to it is removed
let spanTag = document.getElementsByClassName("close");
for (i = 0; i < spanTag.length; i++)
  spanTag[i].onclick = function () {
    this.parentNode.remove(this);
  };
