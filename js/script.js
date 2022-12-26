const form = document.getElementById("form");
const input = document.getElementById("input");
const todoUl = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem("todos"));

const addTodo = (todo) => {
  let todoText = input.value;
  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoLi = document.createElement("li");
    if (todo && todo.completed) {
      todoLi.classList.add("completed");
    }

    todoLi.innerText = todoText;

    todoLi.addEventListener("click", () => {
      todoLi.classList.toggle("completed");
      updateLocalStorage();
    });

    todoLi.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      todoLi.remove();
      updateLocalStorage();
    });

    todoLi.addEventListener("dblclick", (e) => {
      e.preventDefault();
      todoLi.remove();
      updateLocalStorage();
    });

    todoUl.appendChild(todoLi);
    input.value = "";
    updateLocalStorage();
  }
};

const updateLocalStorage = () => {
  todosLi = document.querySelectorAll("li");

  const todos = [];

  todosLi.forEach((todoLi) => {
    todos.push({
      text: todoLi.innerText,
      completed: todoLi.classList.contains("completed"),
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
};

if (todos) {
  todos.forEach((todo) => addTodo(todo));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});
