document.addEventListener("DOMContentLoaded", () => {
  const myForm = document.getElementById("create-task-form");
  myForm.addEventListener("submit", createNewTask);
});

const createNewTask = event => {
  event.preventDefault();

  const myDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = myDescription.value;

  document.getElementById("tasks").appendChild(newTask);
  //event.target.reset();
};
