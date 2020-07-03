document.addEventListener("DOMContentLoaded", () => {

  const taskForm = document.getElementById("create-task-form");
  const taskDescription = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority");

  const taskUl = document.getElementById("tasks");

  taskForm.addEventListener("submit", createNewTask);
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