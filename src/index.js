document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let taskDescription = document.getElementById('new-task-description');
  let taskForm = document.getElementById('create-task-form');

  //add listener for submit form
  //taskForm.addEventListener("submit", addTask());

    taskForm.addEventListener("submit", function(event) {
      event.preventDefault();
      //find  ul
      let ul = document.getElementById('tasks');
      //grab input field
      let newTask = taskDescription;
      //create new li
      let li = document.createElement('li');
      li.innerHTML = newTask.value;
      ul.appendChild(li);
      this.reset();
      li.addEventListener("click", function(event) {
        event.target.remove();
      })
    })

});
