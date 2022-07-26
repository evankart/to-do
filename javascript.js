// ADD ITEMS TO LIST //
const addToList = document.getElementById("btn");
addToList.addEventListener("click", myFunction); // when the button is clicked, myFunction runs

function myFunction() {
  const node = document.createElement("li"); // creates a new list node
  const textnode = document.getElementById("new-item").value; // creates a new text node with the value from the input field
  node.innerHTML = "<li>" + textnode + "</li>"; // places the input field value into <li> tags and places it in the newly created node
  document.getElementById("to-do-list").appendChild(node); // appends the new node to the "to-do-list" element (adds an item to the unordered list)
  document.getElementById("new-item").value = ""; // returns the input value to "" so a new item can be added
}

// REMOVE ITEMS FROM LIST //
const removeItem = document.getElementById("remove-item");
removeItem.addEventListener("click", removeFunction); // when the button is clicked, removeFunction runs

function removeFunction() {
  const removeItem = document.getElementsByTagName("li")[0];
  const containerElement = removeItem.parentNode;
  containerElement.removeChild(removeItem);
}
