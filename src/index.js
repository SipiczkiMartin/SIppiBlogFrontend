//index.js is where React app starts, and so it needs it!!!!
//these imports have to be in each file when we want to work with react
import React from "react"
import ReactDOM from "react-dom"

//this import is used to import a component class from a file
import TodoContainer from "./components/TodoContainer"

//stylesheet
import "./App.css"
//rendering a react component from imported class
ReactDOM.render(<TodoContainer />, document.getElementById("root"))