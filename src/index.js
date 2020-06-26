let formAdd = document.getElementById("create-task-form");
let formDelete = document.getElementById("delete-task-form");
let formEdit = document.getElementById("edit-task-form");
let tasks = document.getElementById('tasks');

document.addEventListener("DOMContentLoaded", () => {

  function addTask(event) {
    const task = document.getElementById("new-task-description").value;
    const duration = document.getElementById("duration").value;
    const priority = document.getElementById("priority").value;
    tasks.innerHTML += `<li id=${task}>${task} with duration ${duration}</li>`;
    if (priority == 'high') {
      document.getElementById(task).style.background = 'red';
    } else if (priority == 'medium') {
      document.getElementById(task).style.background = 'yellow';
    } else if (priority == 'low') {
      document.getElementById(task).style.background = 'green';
    }
    
    event.preventDefault();
  }

  function deleteTask(event) {
    let task = document.getElementById("delete-task-description").value;
    task = document.getElementById(task);
    task.remove();
    event.preventDefault();
  }

  function editTask(event) {
    let task = document.getElementById("edit-task-description").value;
    let description = document.getElementById("edit-task-description-new").value;
    const duration = document.getElementById("edit-task-duration").value;
    const priority = document.getElementById("edit-task-priority").value;
    if (priority == 'high') {
      document.getElementById(task).style.background = 'red';
    } else if (priority == 'medium') {
      document.getElementById(task).style.background = 'yellow';
    } else if (priority == 'low') {
      document.getElementById(task).style.background = 'green';
    }
    document.getElementById(task).innerHTML = `${description} with duration ${duration}`;
    document.getElementById(task).setAttribute("id", `${description}`);


    event.preventDefault();
  }

  formAdd.addEventListener('submit', addTask);
  formDelete.addEventListener('submit', deleteTask);
  formEdit.addEventListener('submit', editTask);


});

function sortList() {
  let tasks1 = document.getElementById('tasks').getElementsByTagName("li");
  let node = document.getElementById('tasks');
  
  let tasksSorted = [];

  for (let i = 0; i < tasks1.length; i++) {
    console.log(tasks1[i].style.background);
    if (tasks1[i].style.background == 'green') {
      tasksSorted.push(tasks1[i]);
    } else if (tasks1[i].style.background == 'yellow') {
      tasksSorted.unshift(tasks1[i]);
    }
  }
  for (let i = 0; i < tasks1.length; i++) {
    if (tasks1[i].style.background == 'red') {
      tasksSorted.unshift(tasks1[i]);
    }
  }
  node.innerHTML = '';
  for (let i = 0; i < tasksSorted.length; i++) {
    node.appendChild(tasksSorted[i]);
    console.log(tasksSorted[i]);
  }
}



