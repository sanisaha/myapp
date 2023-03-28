import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const my_page = 2022;
const demo = <div>
<h1>Hello World, I am Sani</h1>
<p>my first web page was in <strong>{2023-my_page}</strong> years ago</p>
</div>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* {demo} */}
    <App />
  </React.StrictMode>
);

