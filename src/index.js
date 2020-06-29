document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("input[type='submit']").addEventListener("click", function(){
    event.preventDefault()
    const list = document.getElementById('tasks')
    let newListItem = document.createElement('li')
    let task = document.getElementById('new-task-description').value
    let button = document.createElement('button')
    button.textContent = 'X'
    button.setAttribute('data-description', task)
    newListItem.innerText = task + " "
    list.appendChild(newListItem)
    newListItem.appendChild(button)

    button.addEventListener('click', function(){
      removeRow(button)
    })
    document.querySelector('form').reset()
  })
});

function removeRow(e) {
  e.parentNode.parentNode.removeChild(e.parentNode)
}




