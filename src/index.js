import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import reportWebVitals from './reportWebVitals';
import './NameList.css';
import NameList from './NameList'


ReactDOM.render(
  <React.StrictMode>
    <NameList></NameList>

    {/* <NameList></NameList> */}
    {/* <Todo2/> */}
    {/* <App2 /> */}
    {/* <ToDoList> </ToDoList> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
