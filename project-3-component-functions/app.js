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
    document.getElementById("root").innerHTML = App();  
}

function App(){
    return Header() + TodoList(todos);
}

function Header(){
    return `<h1>To Do List</h1>`
}

function TodoList(todos){
    return todos.map(todo => {
        return TodoItem(todo);
    }).join('');
}

function TodoItem(todo){
    return `<div>${todo.taskText}</div>`;
}