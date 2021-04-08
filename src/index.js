document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
});

//what do I do from here create 
function onSubmit(){
  event.preventDefault()
  

    let valuebox = document.getElementById("new-task-description").value
    let list = document.getElementById("list")
  
    list.innerHTML += valuebox
  
  //listen for submit 
  //handle this action 
  //add to submit button
}