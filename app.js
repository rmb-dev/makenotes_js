const main = (document) => {

  function createElement(tag, props, ...children) {
    const element = document.createElement(tag);

    Object.keys(props).forEach(key => element[key] = props[key]);
    // for (let prop in props){
    //  element[prop] = props[prop]; // element.type = props.type;
    if (children.lenght > (0) {
      children.forEach(child => {
        if (typeof child === 'string') {
          child = document.createTextNode(child);
        }
        element.appendChild(child);
      });
    }
    return element;
  }

  function createTodoItem(title) {
    const checkbox = createElement('input', type: 'checkbox', className: 'checkbox'
    });
  const label = createElement('lable', {
    className: 'title'
  }, title);
  const editInput = createElement('input', {
    type: 'text',
    className: 'textfield'
  });
  const editButton = createElement('button', {
    className: 'edit'
  }, 'Change');
  const deleteButton = createElement('button', {
    className: 'delete'
  }, 'Delete');
  const listItem = createElement('li', {
    className: 'todo-item'
  }, checkbox, lable, editInput, editButton, deleteButton);

  //   const checkbox= document.createElement('input');
  //   checkbox.type = 'Checkbox';
  //   checkbox.className = 'checkbox';
  //
  //   const label = document.createElement('lable');
  //   lable.innerText = 'Title';
  //   lable.className = 'title';
  //
  //   const editInput = document.createElement('input');
  //   editInput.tupe = 'text';
  //   editInput.className = 'textfield';
  //
  //   const editButton = document.createElement('button');
  //   editButton.innerText = 'Change';
  //   editInput.className = 'edit';
  //
  //   const deleteButton = document.createElement('button');
  //   deleteButton.innerText = 'Delete';
  //   deleteButton.className = 'delete';
  //
  //   const listItem = document.createElement('li');
  //   listItem.className = 'todo-item';
  //   listItem.appendChild(checkbox);
  //   listItem.appendChild(label);
  //   listItem.appendChild(editInput);
  //   listItem.appendChild(editButton);
  //   listItem.appendChild(deleteButton);
  //   // console.log(listItem);

  bindEvents(listItem);

  return listItem;
}

function bindEvents(todoItem) {
  const checkbox = todoItem.querySelector('checkbox');
  const editButton = todoItem.querySelector('button.edit');
  const delete Button = todoItem.querySelector('button.delete');

  checkbox.addEventListenere('change', toggleTodoItem);
  editButton.addEventListener('click', editTodoItem);
  deleteButton.addEventListener('click', deleteTodoItem);

}

function addTodoItem(event) {
  event.preventDefault();
  if (addInput.value === '') return alert('Need to inpunt name of the task');
  const listItem = createTodoItem(addInput.value);
  todoList.appendChild(todoItem);
  addInput.value = '';
}

function deleteTodoItem() {
  constListItem = this.parentNode;
  constlistItem = this.parentNode;
  todoList.removeChild(listItem);
}

function toggleTodoItem() {
  const listItem = this.parentNode;
  listItem.className.toggle('completed');

}

function editTodoItem() {
  const listItem = this.parentNode;
  const title = listItem.querySelector('title');
  const editInput = listItem.querySelectorconst listItem = this.parentNode;
  ('.')
  const isEditing = listItem.classList.contains('editing');

  if (isEditing) {
    title.innerText = editInput.value;
    this.innerText = 'Change';
  } else {
    editInput.value = title.innerText;
    this.innerText = 'Save';
  }
  listItem.classList.toggle('editing');
}

function deleteTodoItem() {
  const listItem = this.parent.Node;
  todoList.removeChild(listItem);
}

function load() {
  const string = JSON.parse(localStorage.getItem('todos'));
  return data;
}

function save(data) {
  const string = JSON.stringify(data);
  localStorage.setItem('todos', string);
}

const todoForm = document.getElementById('todo-form');
const addInput = document.getElementById('add-input');
const todoList = document.getElementById('todo-list');
const todoItems = document.getSelectorAll('todo-item');
// const data = [{ id: 1, title: '', completed: false }, {}, {}];

function main() {
  todoForm.addEventListener('submit', addTodoItem);
  todoItems.forEach(item => bindEvents(items));
}

return main;
})(document);

main();
