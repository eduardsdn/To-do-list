//Task object constructor

function task(content){
    this.content = content;
}

//list of all task objects
tasks = []

form = document.getElementById("form")
form.addEventListener('submit', function(event){
    event.preventDefault()

    let content = document.getElementById('text-input').value

    let taskObj = new task(content)
    
    tasks.push(taskObj)
})





