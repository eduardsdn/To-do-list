
tasks = [] //list of all task objects

function task(content){ //Task object constructor
    this.content = content;
    this.isDisplayed = false;
}

form = document.getElementById("form")
form.addEventListener('submit', function(event){
    event.preventDefault()

    let content = document.getElementById('text-input').value

    let taskObj = new task(content)
    
    tasks.push(taskObj)

    console.log(tasks)

    displayTasks(tasks)
})

function displayTasks(tasks){
    for(let i = 0; i < tasks.length; i++) {
        let newTask = document.createElement("li")
        newTask.classList.add("task")
        
        let newTaskContent = `<div class="text-with-tick">
                                <input type="radio">
                                <p>${tasks[i].content}</p>
                              </div>

                              <button class="delete-note-btn">x</button>`

        newTask.innerHTML = newTaskContent
        
    
        deleteBtn = newTask.querySelector(".delete-note-btn")
        console.log(deleteBtn)
        
        deleteBtn.addEventListener('click', deleteNote)
        
        

        tasksContainer = document.querySelector(".list-holder")
        
        if(tasks[i].isDisplayed === false){
            tasksContainer.appendChild(newTask)
            tasks[i].isDisplayed = true
        }
    }
}

function deleteNote(){ 
    
}








