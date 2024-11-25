import './app.js';
import './style.css';
import { renderAllProjects } from './app.js';
import { initApp } from './app.js';

const appContainer = document.createElement('div');
appContainer.id = 'app';
document.body.appendChild(appContainer);

document.addEventListener('DOMContentLoaded', () => {
  const appContainer = document.createElement('div');
  appContainer.id = 'app';
  document.body.appendChild(appContainer);

  initApp();
});

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

renderAllProjects(appContainer);