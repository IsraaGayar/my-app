import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
// import . from '../node_modules/bootstrap/dist/js/bootstrap.js'

import reportWebVitals from './reportWebVitals';
import './NameList.css';
import NameList from './NameList'
import Todo2 from './Todo2';

import MyMainApp from './MyMainApp';
import { BrowserRouter } from 'react-router-dom';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <MyMainApp></MyMainApp>
    </BrowserRouter>
 
    {/* <NameList></NameList> */}
    {/* <Todo2></Todo2> */}

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
