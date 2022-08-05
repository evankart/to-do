// COMPLETE: Create an array to hold all the items on the list
let listArray = ["apples", "bananas", "hot dogs"];
const listHTML = document.getElementById("to-do-list");

for (let i = 0; i < listArray.length; i++) {
  console.log("<li>" + listArray[i] + "</li>");
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(listArray[i]));
  listHTML.appendChild(li);
}

//------------------------------------------------------------
//COMPLETE: when you click 'add to list', the value is added to the array
const addBtn = document.getElementById("btn");
addBtn.addEventListener("click", addToList); // when the button is clicked, addToList function runs
function addToList() {
  console.log(document.getElementById("new-item").value);
  newItem = document.getElementById("new-item").value;
  listArray.push(newItem);
  console.log(listArray);
  //TO DO: after the new value is added to the array, the list is refreshed
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem));
  listHTML.appendChild(li);

  document.getElementById("new-item").value = "";
}

//TO DO: Add delete buttons for every item added to the list.

//TO DO: Add event handlers that remove the relevant list item when the delete button is pressed.
