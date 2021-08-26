//selectors
const todoInput =document.querySelector('.todo-input');
const todoButton =document.querySelector('.todo-button');
const todoList =document.querySelector('.todo-list');


//event listeners
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck);

//functions

function addTodo(event) {
    //prevent form from submitting
    event.preventDefault();

    //todo div

    const todoDiv =document.createElement("div");
    todoDiv.classList.add("todo");

    //create LI

    const newTodo = document.createElement('li');
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // //add to local storage -- it is not added but wants to add here later



    // saveLocalTodos(todoInput.value);

    //Check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class = "fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    
    //Check trash  button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //append todo list
    todoList.appendChild(todoDiv);

    //clear input value
    todoInput.value="";
}

function deleteCheck(e) {
    const item= e.target;

    //delete todo

    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        //Animation here
        todo.classList.add("fall");
        todo.addEventListener('transitioned',function () {
            todo.remove();
        });
    }

    //check mark

    if(item.classList[0]=="complete-btn")
    {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

// function saveLocalTodos(todo){
//     //check if it already present
//     let todos;
//     if(localStorage.hetItem('todos') ===null)
//     {
//         todos= [];
//     }
//     else{
//         todos = JSON.parse(localStorage.getItem('todos'));

//     }
//     todos.push(todo);
//     localStorage.setItem('todos', JSON.stringify(todos));
// }

// function getTodos()
// {
//     let todos;

// }