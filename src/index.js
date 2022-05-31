import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

async function test1() {
    setTimeout(() => console.info("Called!"), 100);
}

console.table(process.env);
async function callme() {
    await test1();
}

callme();
