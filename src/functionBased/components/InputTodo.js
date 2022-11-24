//in function based react we have to import the hooks like here with useState
import React, { useState } from "react"

//adding const server as static..... don't need to use this. 
const InputTodo = props =>{
    const [inputText, setInputText] = useState({
        title: "",
    })
    
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