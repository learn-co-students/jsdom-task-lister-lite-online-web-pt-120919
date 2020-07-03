document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const createTaskForm = document.getElementById("create-task-form");
  createTaskForm.addEventListener("submit", createNewTask);
  console.log("hello")
});


const createNewTask = event => {
  event.preventDefault();

  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;

  appendNewTask(newTask);
  event.target.reset();
};

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};