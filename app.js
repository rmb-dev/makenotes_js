function createTodoItem(title) {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'checkbox';

  const label = document.createElement('lable');
  lable.innerText = title;
  lable.className = 'title';

  const editInput = document.createElement('input');
  editInput.tupe = 'text';
  editInput.className = 'textfield';

  const editButton = document.createElement('button');
  editButton.innerText = 'Change';
  editInput.className = 'edit';

  const deleteButton = document.createElement('button');
  editButton.innerText = 'Delete';
  editButton.className = 'delete';
}




function addTodoItem(event) {
  event.preventDefault();
  if (addInput.value === '') return alert('Need to inpunt name of the task');
  const listItem = createTodoItem(addInput.value);
}

function deleteTodoItem() {
  constListItem = this.parentNode;
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