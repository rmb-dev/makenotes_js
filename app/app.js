listItem.classList.toggle('editing');
}

function deleteTodoItem() {
  constListItem = this.parentNode;
  todoList.removeChild(listItem);
}

function addTodoItem(event) {
  event.preventDefault();

  if (addInput.value === '') return alert('You need to input your task')

  const listItem = createTodoItem(addInput.value);
}

const todoForm = document.getElementById('todo-form');
const addInput = document.getElementById('add-input');
const todoList = document.getElementById('todo-list');
const todoItems = document.getElementById('todo-form');

function main() {
  todoForm.addEventListener('submit', addTodoItem);
  todoItems.forEach(item => bindEvents(items));
}
