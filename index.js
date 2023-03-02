const todoList = document.querySelector('.todo__list');
const main = document.querySelector('.main');

function addSection() {
  main.appendChild(section());
}

function section() {
  // <section class="main__section">
  //   <h3 class="main__section--h3" contenteditable="true" spellcheck="false" data-placeholder="Titulo">Planeación del producto</h3>
  //   <div class="todo__list">
  //     <button class="todo__list--add-btn" onclick="addToDo()">
  //       <img src="./assets/svg/plus.svg" />
  //       <p>Agregar elemento</p>
  //     </button>
  //   </div>
  // </section>

  const newNode = document.createElement('section');
  const h3Node = document.createElement('h3');
  const divNode = document.createElement('div');
  const buttonNode = document.createElement('button');
  const imgNode = document.createElement('img');
  const pNode = document.createElement('p');

  newNode.setAttribute('class', 'main__section');
  newNode.appendChild(h3Node);
  h3Node.setAttribute('class', 'main__section--h3');
  h3Node.setAttribute('contenteditable', 'true');
  h3Node.setAttribute('spellcheck', 'false');
  h3Node.setAttribute('data-placeholder', 'Título');
  newNode.appendChild(divNode);
  divNode.setAttribute('class', 'todo__list');
  divNode.appendChild(buttonNode);
  buttonNode.setAttribute('class', 'todo__list--add-btn');
  buttonNode.setAttribute('onclick', 'addToDo(event)');
  buttonNode.appendChild(imgNode);
  imgNode.setAttribute('src', './assets/svg/plus.svg');
  buttonNode.appendChild(pNode);
  pNode.textContent = 'Agregar elemento';

  return newNode;
}

function addToDo(event) {
  const parentElement = event.target.parentElement.parentElement;
  const button = event.target.parentElement;
  parentElement.insertBefore(toDoItem(), button);
}

function deleteToDo(event) {
  const parentElement = event.target.parentElement.parentElement;
  if (!event.target.firstChild.length) {
    parentElement.removeChild(event.target.parentElement);
  }
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
  pNode.setAttribute('oninput', 'deleteToDo(event)');

  return newNode;
}

function editTitle(event) {
  const headerTitle = document.querySelector('.header__dir--section');
  const sidebarProject = document.querySelector('.sidebar__page--item');
  headerTitle.textContent = event.target.textContent;
  sidebarProject.textContent = event.target.textContent;
  document.title = event.target.textContent;
}
