//index.js is where React app starts, and so it needs it!!!!
//these imports have to be in each file when we want to work with react
import React from "react"
import ReactDOM from "react-dom"

//this import is used to import a component class from a file
import TodoContainer from "./functionBased/components/TodoContainer"
import About from "./functionBased/pages/About"
import NoMatch from "./functionBased/pages/NoMatch"
import Navbar from "./functionBased/components/Navbar"

//importing for routing
import { BrowserRouter,Routes, Route } from "react-router-dom"

//stylesheet
import "./functionBased/App.css"
//rendering a react component from imported class
//browserRouter> needed as a wrapper of the "main" component
ReactDOM.render(
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<TodoContainer/>}/>
            <Route path="about/" element={<About/>}/>
            <Route path="*" element={<NoMatch/>}/>
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
)