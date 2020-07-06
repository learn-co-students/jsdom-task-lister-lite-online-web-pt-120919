document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form")
  const tasks = document.getElementById("tasks")


  taskForm.addEventListener("submit", function(e) {
    event.preventDefault();
     
    //Grab the user input 
    const newTask = document.getElementById("new-task-description").value

    //Add newTask to DOM
    tasks.innerHTML += `<li> ${newTask} <button data-action= "delete" style="color:red;"> X </button></li>`
    
    //resets the user input value
    taskForm.reset()
  })

    tasks.addEventListener("click", function(e){
        console.log(e.target)
      if (e.target.dataset.action === "delete") {
          e.target.parentElement.remove()
      }
    })
});
