import React from "react";
import ReactDOM from "react-dom";
import App from './App.jsx';
import exampleData from '../../data/example_data';



var mountNode = document.getElementById("app");
ReactDOM.render(<App exampleData={exampleData}/>, mountNode);