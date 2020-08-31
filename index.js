
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskDescription = document.getElementById("new-task-description");
    const newTask = document.createElement("li");
    newTask.innerText = taskDescription.value;
    document.getElementById("tasks").appendChild(newTask);
    });
  };