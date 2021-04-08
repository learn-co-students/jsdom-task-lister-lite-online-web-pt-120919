document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let taskForm = document.querySelector("#create-task-form")
  console.log(taskForm)
  taskForm.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("hey")
    let getDocument = document.getElementById("new-task-description").value
    console.log(getDocument)
let tasksUl = document.getElementById("tasks")
console.log(tasksUl)
    let li = document.createElement("li");
    li.innerHTML = getDocument

    tasksUl.appendChild(li)
    console.log(event.target)
    event.target.reset();

  })
});

// everytime i submit something i should console log that something. get the data passing within the text Input, then display underneatht the ul id="ids"
