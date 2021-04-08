document.addEventListener("DOMContentLoaded", () => {
  // your code here

const main = document.querySelector("#main-content")
console.log(main)

const taskForm = document.querySelector("#create-task-form")

taskForm.addEventListener("submit", function(e) {
  e.preventDefault()
  const newTask = document.querySelector("#new-task-description")
  newTask.value 
});

  taskList.innerHTML += `
     <li>  ${newTask} 
       <button data-action="delete" data-matt="PERF" data-charlie="downfield"> X for delete</button>
     </li>`

     taskForm.reset()
})

taskList.addEventListener("click", function(e) {
  console.log(e.target)
  if (e.target.dataset.action === "delete") {
    e.target.parentElement.remove()
  }
})
