document.addEventListener("DOMContentLoaded", () => {
 const newTaskForm = document.getElementById("create-task-form");
 const newTaskDescription = document.getElementById("new-task-description");
 const tasks = document.getElementById("tasks");

 newTaskForm.addEventListener("submit", createNewTask) 

 function createNewTask (event ) { 
   
  event.preventDefault()
  const newTasks = document.getElementById("new-task-description").value;
  //debugger
  console.log("clicked button")
  const Li = document.createElement("LI")
  Li.innerHTML = newTasks   
  tasks.append(Li) 
 }

}) 