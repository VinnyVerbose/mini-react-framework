// STATE
let count = 0;
let todos = [];

// DOM REFERENCES
const btnIncrement = document.getElementById("btnIncrement");
const btnDecrement = document.getElementById("btnDecrement");
const btnReset = document.getElementById("btnReset");

const todoListEl = document.getElementById("todo-list");
const counterText = document.getElementById("counter-text");

const inpTodo = document.getElementById("inpTodo");
const btnAddToDo = document.getElementById("btnAddToDo");
const todoWrapper = document.getElementById("todoWrapper");


// Events
btnAddToDo.addEventListener('click', () => {
    addTodo(inpTodo.value);
    
})

btnIncrement.addEventListener('click', () => {
    incrementCount();
    renderCounter();
});

btnDecrement.addEventListener('click', () => {
    decrementCount();
    renderCounter();
});

btnReset.addEventListener('click', () => {
    resetCount();
    renderCounter();
})

// RENDER FUNCTIONS
function renderCounter() {
    counterText.innerText = count;
}

function renderTodos() {
    todoWrapper.innerHTML = '';
    todos.forEach(task => {
        let div = document.createElement('div');
        div.innerText = task.taskText;
        div.dataset.id = task.id;

        if(task.completed){
            div.style.textDecoration = "line-through";
        } else {
            div.style.textDecoration = "unset";
        }


        let btnDelete = document.createElement('button');
        let btnToggleComplete = document.createElement('button');
        btnToggleComplete.innerText = 'Complete';
        btnDelete.innerText = 'delete';

        btnToggleComplete.addEventListener('click', () => {
            toggleComplete(div.dataset.id);
        })

        btnDelete.addEventListener('click', () => {
            deleteTask(div.dataset.id);
        });



        div.appendChild(btnDelete);
        div.appendChild(btnToggleComplete);

        todoWrapper.appendChild(div);
    })
}

// EVENT FUNCTIONS
function incrementCount() {
    count++;
}

function decrementCount(){
    count--;
    count = count <= 0 ? 0 : count;
}

function resetCount(){
    count = 0;
}

function addTodo(taskText) {
     todos.push({
        taskText,
        completed: false,
        id: `${Date.now()}`
    })

    renderTodos();
}

function deleteTask(id){
    todos = todos.filter(task => task.id !== id);
    renderTodos();
}

function toggleComplete(id){
    todos.forEach(task => {
        if(task.id === id) task.completed = !task.completed;
    })

    renderTodos();
}