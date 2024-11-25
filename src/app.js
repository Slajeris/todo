import { loadFromLocalStorage, saveToLocalStorage } from './dom.js';
import { renderProject, renderTodoForm, renderTopBar, renderTodoModal, renderTodo } from './dom.js';

const TODOS_KEY = 'todos';
const PROJECTS_KEY = 'projects';

//storage control
let todos = loadFromLocalStorage(TODOS_KEY) || [];
let projects = loadFromLocalStorage(PROJECTS_KEY) || [];

todos = todos.map(function (todo) {
  return {
    title: todo.title,
    description: todo.description,
    date: todo.date,
    priority: todo.priority,
    edit: function (newTitle, newDescription) {
      this.title = newTitle;
      this.description = newDescription;
    },
    complete: function () {
      console.log('Task "' + this.title + '" completed!');
    }
  };
});

projects = projects.map(function (project) {
  return {
    name: project.name,
    todos: project.todos || [],
    addTodo: function (todo) {
      this.todos.push(todo);
    }
  };
});

function renderDashboard() {
  const appContainer = document.getElementById('app');

  const existingDashboard = document.getElementById('dashboard');
  if (existingDashboard) {
    existingDashboard.remove();
  }

  const dashboard = document.createElement('div');
  dashboard.id = 'dashboard';

  todos.forEach(function (todo, index) {
    const todoElement = renderTodo(
      todo,
      function (updatedTodo) {
        todos[index] = updatedTodo;
        saveToLocalStorage(TODOS_KEY, todos); //save after edit to stor
        renderDashboard();
      },
      function () {
        todos.splice(index, 1);
        saveToLocalStorage(TODOS_KEY, todos);
        renderDashboard();
      },
      function () {
        todos.splice(index, 1);
        saveToLocalStorage(TODOS_KEY, todos);
        renderDashboard();
      }
    );
    dashboard.appendChild(todoElement);
  });

  appContainer.appendChild(dashboard);
}

export function renderAllProjects(container) {
  container.innerHTML = '';

  if (projects.length === 0) {
    const message = document.createElement('p');
    message.textContent = 'No projects available. Create one to get started!';
    message.style.textAlign = 'center';
    message.style.color = '#777';
    container.appendChild(message);
    return;
  }

  projects.forEach(function (project) {
    const projectElement = renderProject(project);

    const todoForm = renderTodoForm(function (todoData) {
      const newTodo = {
        title: todoData.title,
        description: todoData.description,
        dueDate: todoData.dueDate,
        priority: todoData.priority
      };
      project.addTodo(newTodo);

      saveToLocalStorage(PROJECTS_KEY, projects);
      renderAllProjects(container);
    });
    projectElement.appendChild(todoForm);

    container.appendChild(projectElement);
  });
}

export function initApp() {
  const appContainer = document.getElementById('app');
  appContainer.innerHTML = '';
  const topBar = renderTopBar(function () {
    const modal = renderTodoModal(function (todoData) {
      todos.push(todoData);

      saveToLocalStorage(TODOS_KEY, todos);
      renderDashboard();
    });
    document.body.appendChild(modal);
  });

  appContainer.appendChild(topBar);
  renderDashboard(); //render
}
