document.addEventListener("DOMContentLoaded", () => {

});
 
const main = document.querySelector("#main-content")
console.log(main)

const taskForm = document.querySelector("#create-task-form")

const taskList = document.querySelector("#tasks");


taskForm.addEventListener("submit", function(e) {
  e.preventDefault()
  const newTask = document.querySelector("#new-task-description").value

  taskList.innerHTML += 
  `<li> ${newTask}
    <button data-action="delete"> X for delete </button>
  </li>
  `

  taskList.addEventListener("click", function(e) {
    console.log(e.target)
    if (e.target.dataset.action === "delete") {
      e.target.parentElement.remove()
    }
  })

  const taskItem = document.createElement("li")
  taskForm.reset()

  // taskItem.innerText = newTask
  
  // taskList.appendChild(taskItem)
});


// SECOND VERSION OF CODE FOR THIS LAB BELOW

// document.addEventListener("DOMContentLoaded", () => {
//   // your code here

//   const createTaskForm = document.getElementById("create-task-form");
//   createTaskForm.addEventListener("submit", createNewTask);
//   console.log("hello")
// });


// const createNewTask = event => {
//   event.preventDefault();

//   const newTaskDescription = document.getElementById("new-task-description");
//   const newTask = document.createElement("li");
//   newTask.innerText = newTaskDescription.value;

//   appendNewTask(newTask);
//   event.target.reset();
// };

// const appendNewTask = task => {
//   document.getElementById("tasks").appendChild(task);
// };
