document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", function(event) {
    const task = document.getElementById('new-task-description').value;
    
    const li = document.createElement("li")
    li.innerText = task;

    const span = document.createElement("span")
    span.innerHTML = " (-)"
    
    span.addEventListener("click", function(event) {
      event.target.parentElement.remove();
    })

    li.append(span)

    document.getElementById("tasks").append(li);
    
    // Prevent form submission
    event.preventDefault();

  });
});


