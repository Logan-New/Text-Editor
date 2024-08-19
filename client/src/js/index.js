// Import the Workbox library and other modules
import { Workbox } from 'workbox-window'; // Ensure this import works if using a bundler
import Editor from './editor';
import './database';
import '../css/style.css';

// Get the main container
const main = document.querySelector('#main');
main.innerHTML = '';

// Function to load a spinner while the editor is initializing
const loadSpinner = () => {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.innerHTML = `
    <div class="loading-container">
      <div class="loading-spinner"></div>
    </div>
  `;
  main.appendChild(spinner);
};

// Initialize the editor
const editor = new Editor();

// Show spinner if editor is undefined
if (typeof editor === 'undefined') {
  loadSpinner();
}

// Check if service workers are supported
if ('serviceWorker' in navigator) {
  // Register workbox service worker
  const workboxSW = new Workbox('/src-sw.js');
  workboxSW.register();
} else {
  console.error('Service workers are not supported in this browser.');
}
