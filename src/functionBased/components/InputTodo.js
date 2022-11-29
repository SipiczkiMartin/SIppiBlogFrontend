//in function based react we have to import the hooks like here with useState
import React, { useState } from "react"

//adding const server as static..... don't need to use this. 
const InputTodo = props =>{
    //here we user the inputText and setInputText to accomodate for more input fields in the future
    //the only thing we have to worry about is that in the onChange method the name muss correspond with the 
    //name of the variable in the const useState hook i.e. title
    const [inputText, setInputText] = useState({
        title: "",
    })
    
    //here we're using the setInputText which we specified above as the method to change/trigger userState hook for these fields
    const onChange = e =>{
        setInputText({
            ...inputText,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e =>{
        e.preventDefault()
        if(inputText.title.trim()){
            props.addTodoProps(inputText.title)
            setInputText({
                title: "",
            })
        }else{
            alert("Please write item")
        }
    }

    //here the name attribute has to correspond with the input we want to change in the useState and onChange methods
    return (
        <form onSubmit={handleSubmit} className="form-container">
            <input
                type="text"
                className="input-text"
                placeholder="Add todo..."
                value={inputText.title}
                onChange={onChange}
                name="title"
            />
            <button className="input-submit">Submit</button>
        </form>
    )
}

export default InputTodo