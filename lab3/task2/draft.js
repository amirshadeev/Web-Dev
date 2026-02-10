const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#list");
const todoInput = document.querySelector("#todo-input");
const createTodoItem = (taskText) =>{
    const listItem = document.createElement("li");
    const leftContainer = document.createElement("div"   );
    const checkbox = document.createElement("input");
    const tasklabel = document.createElement("span");
    const deleteButton = document.createElement("button");

    leftContainer.classList.add("task-left");
    deleteButton.classList.add("delete-btn");

    checkbox.type = "checkbox";
    tasklabel.textContent = taskText;
    deleteButton.textContent = "delete";

    //event
    checkbox.addEventListener("change", () => {
        tasklabel.classList.toggle("done");
    })

    deleteButton.addEventListener("click", () =>{
        todoList.removeChild(listItem);
    })

    leftContainer.appendChild(checkbox);
    leftContainer.appendChild(tasklabel);

    listItem.appendChild(leftContainer);
    listItem.appendChild(deleteButton);

    todoList.appendChild(listItem);
}
const handleaddtask = (event) =>{
event.preventDefault();


const taskText = todoInput.value.trim();
if(taskText ==""){
    return;
}
createTodoItem(taskText);
todoInput.value = "";
}

todoForm.addEventListener("submit", handleaddtask);