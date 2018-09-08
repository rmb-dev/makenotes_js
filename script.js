listItem.classList.toggle('editing');
}

function deleteTodoItem() {
  constlistItem = this.parentNode;
  todoList.removeChild(listItem);
}

const todoForm = document.getElementById('todo-form');
const addInput = document.getElementById('add-input');
const todoList = document.getElementById('todo-list');
const todoItems = document.getElementById('todo-form');

function main() {
  todoForm.addEventListener('submit', addTodoItem);
  todoItems.forEach(item => bindEvents(items));
}

