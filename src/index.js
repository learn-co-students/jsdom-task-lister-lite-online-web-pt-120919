document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form');
  const task = document.getElementById('new-task-description');

  const newTaskUl = document.getElementById("tasks");

  form.addEventListener('submit', addTask);

});

const newTask = event => {
  event.preventDefault();
  const task = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = task.value;

  appendNewTask(newTask);
  event.target.reset();
};

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};