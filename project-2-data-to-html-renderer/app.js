let todos = [];

document.getElementById('btnAdd').addEventListener('click', () => {
    addToDo(document.getElementById('inpTodo').value);
})

function addToDo(text){
    
    let obj = {
        taskText: text,
        completed: false
    }

    todos.push(obj);
    render();
}

function render(){
    document.getElementById("todoWrapper").innerHTML = '';
    let htmlStr = '';
    todos.forEach(todo => {
        htmlStr += createHTML(todo);
    })

    document.getElementById("todoWrapper").innerHTML = htmlStr;  
}

function createHTML(obj){
    return `<div>${obj.taskText}</div>`;
}
