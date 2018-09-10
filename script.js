listItem.classList.toggle('editing');
}

function deleteTodoItem() {
<<<<<<< HEAD
  constListItem = this.parentNode;
=======
  constlistItem = this.parentNode;
>>>>>>> 7afb3347cdc3f6d7371deb069c550ded3719954a
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
<<<<<<< HEAD
=======

>>>>>>> 7afb3347cdc3f6d7371deb069c550ded3719954a
