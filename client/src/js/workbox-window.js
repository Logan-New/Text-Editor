import { Workbox } from 'workbox-window';

if ('serviceWorker' in navigator) {
  const workboxSW = new Workbox('/src-sw.js');
  workboxSW.register();
}
