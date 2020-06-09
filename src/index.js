import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import App from './containers/App'
//import App from './App';//If there is no extension then by default it is consider js file
//It is a standard that component must be capitalized
import * as serviceWorker from './serviceWorker';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// ReactDOM.render(
//   <React.StrictMode>
//     <h1>Hello world</h1>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
ReactDOM.render(<React.StrictMode><App/></React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
