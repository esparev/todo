const addBtn = document.querySelector('.todo__list--add-btn');
const todoList = document.querySelector('.todo__list');

function addToDo() {
  todoList.insertBefore(toDoItem(), addBtn);
}

function toDoItem() {
  // <div class="todo__item">
  //   <input class="todo__item--checkbox" type="checkbox" name="todo-01">
  //   <p class="todo__item--input" spellcheck="false" contenteditable="true">
  //     Decidir como organizar la página de hoy
  //   </p>
  // </div>
  const newNode = document.createElement('div');
  const inputNode = document.createElement('input');
  const pNode = document.createElement('p');

  newNode.setAttribute('class', 'todo__item');
  newNode.appendChild(inputNode);
  newNode.appendChild(pNode);
  inputNode.setAttribute('class', 'todo__item--checkbox');
  inputNode.setAttribute('type', 'checkbox');
  inputNode.setAttribute('name', 'a-todo');
  pNode.setAttribute('class', 'todo__item--input');
  pNode.setAttribute('spellcheck', 'false');
  pNode.setAttribute('contenteditable', 'true');

  return newNode;
}
