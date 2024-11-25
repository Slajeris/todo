export function renderProject(project) {
  const projectDiv = document.createElement('div');
  projectDiv.classList.add('project');
  projectDiv.innerHTML = `<h2>${project.name}</h2>`;

  project.todos.forEach(todo => {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    todoDiv.innerHTML = `
      <h3>${todo.title}</h3>
      <p>${todo.description}</p>
      <p>Due: ${todo.dueDate}</p>
      <p>Priority: ${todo.priority}</p>
    `;
    projectDiv.appendChild(todoDiv);
  });

  return projectDiv;
}

export function renderTodoForm(onSubmitCallback) {
  const form = document.createElement('form');
  form.innerHTML = `
    <input type="text" id="todo-title" placeholder="Title" required />
    <input type="text" id="todo-description" placeholder="Description" />
    <input type="date" id="todo-due-date" required />
    <select id="todo-priority">
      <option value="Low">Low</option>
      <option value="Medium">Medium</option>
      <option value="High">High</option>
    </select>
    <button type="submit">Add Todo</button>
  `;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('todo-title').value;
    const description = document.getElementById('todo-description').value;
    const dueDate = document.getElementById('todo-due-date').value;
    const priority = document.getElementById('todo-priority').value;
    onSubmitCallback({ title, description, dueDate, priority });
    form.reset();
  });

  return form;
}

export function renderProjectForm(onSubmitCallback) {
  const form = document.createElement('form');
  form.innerHTML = `
    <input type="text" id="project-name" placeholder="Project Name" required />
    <button type="submit">Add Project</button>
  `;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const projectName = document.getElementById('project-name').value;
    onSubmitCallback(projectName);
    form.reset();
  });

  return form;
}

//topbar
export function renderTopBar(onCreateTodoClick) {
  const topBar = document.createElement('div');
  topBar.classList.add('top-bar'); 


  const title = document.createElement('div');
  title.classList.add('top-bar-title'); 
  title.textContent = 'TODO List';

  const createButton = document.createElement('button');
  createButton.classList.add('create-todo-btn');
  createButton.textContent = 'Create TODO';

  createButton.addEventListener('click', () => {
    onCreateTodoClick();
  });

  topBar.appendChild(title);
  topBar.appendChild(createButton);

  return topBar;
}

export function renderTodoModal(onSubmitCallback) {
  const modal = document.createElement('div');
  modal.classList.add('modal');

  const form = document.createElement('form');
  form.classList.add('modal-form');

  form.innerHTML = `
    <h2>Create TODO</h2>
    <label>Title:</label>
    <input type="text" id="todo-title" placeholder="Title" required />
    <label>Description:</label>
    <textarea id="todo-description" placeholder="Description"></textarea>
    <label>Date:</label>
    <input type="date" id="todo-date" required />
    <label>Priority:</label>
    <select id="todo-priority">
      <option value="Low">Low</option>
      <option value="Medium">Medium</option>
      <option value="High">High</option>
    </select>
    <div class="button-group">
      <button type="submit" class="create-btn">Create</button>
      <button type="button" id="cancel-button" class="cancel-btn">Cancel</button>
    </div>
  `;
  
  //dissalow passed dates
  const today = new Date().toISOString().split('T')[0];
  form.querySelector('#todo-date').setAttribute('min', today);

  // Sumbit
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('todo-title').value;
    const description = document.getElementById('todo-description').value;
    const date = document.getElementById('todo-date').value;
    const priority = document.getElementById('todo-priority').value;
    onSubmitCallback({ title, description, date, priority });
    modal.remove();
  });

  form.querySelector('#cancel-button').addEventListener('click', () => {
    modal.remove();
  });

  modal.appendChild(form);
  return modal;
}


export function renderTodo(todo, onEditCallback, onDeleteCallback, onCompleteCallback) {
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  todoDiv.innerHTML = `
    <h3>${todo.title}</h3>
    <p>${todo.description}</p>
    <p><strong>Date:</strong> ${todo.date}</p>
    <p><strong>Priority:</strong> ${todo.priority}</p>
    <div class="button-group">
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
      <button class="complete-btn">Complete</button>
    </div>
  `;

  todoDiv.querySelector('.edit-btn').onclick = () => {
    const updatedTitle = prompt('Edit Title:', todo.title);
    const updatedDescription = prompt('Edit Description:', todo.description);

    if (updatedTitle !== null) todo.title = updatedTitle;
    if (updatedDescription !== null) todo.description = updatedDescription;

    onEditCallback(todo);
  };

  todoDiv.querySelector('.delete-btn').onclick = () => onDeleteCallback(todo);
  todoDiv.querySelector('.complete-btn').onclick = () => {
    showCompletionPopup();
    onCompleteCallback(todo);
  };

  return todoDiv;
}



export function showCompletionPopup() {
  const popup = document.createElement('div');
  popup.classList.add('completion-popup');
  popup.textContent = 'Task completed!';

  document.body.appendChild(popup);
  //timer for pop up
  setTimeout(() => {
    popup.remove();
  }, 3000);
}

//storage functions
export function saveToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function loadFromLocalStorage(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}