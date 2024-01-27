import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />
);
/*
  only affects in development mode not in prodtion !
  #StrictMode can affect in 6 different types  
    -unintended side effect (React intentionally invokes certain functions twice to help catch unintentional side-effects.)
    -detect mount and unmount (use cleanup code in useEffect )
    -can detect depriciated code     
    - Identifying Unsafe Lifecycles:
 
 */

