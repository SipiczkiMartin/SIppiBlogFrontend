React component phases:
Mounting -> component inserted in the DOM
Updating -> can be updated through states and props hence trigger rendering
Unmounting ->component removed from the DOM

!! in each of these phases React provides lifecycle methods:
render() -> only required lifecycle method!!!
componentDidMount() => called after component is rendered
componentDidUpdate() -> called after updating occurs
componentWillUnmount -> just before Unmounting a component

-------------------------
fetch() -> from native Fetch API, use to perform and handle responses and requests from server
!! Can also use Axios !!

https://jsonplaceholder.typicode.com/todos -> use to mimic a server.... look under resources for all types of jsons they provide



useState hook with object:
import React, { useState } from "react"

const InputTodo = props => {
  const [inputText, setInputText] = useState({
    fName: "",
    lastName: "",
  })

  const onChange = e => {
    setInputText({
      //spread operator otherwise values overwritten...no bueno
      ...inputText,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log("submitted")
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add first name"
          value={inputText.fName}
          name="fName"
          onChange={onChange}
        />
        <input
          type="text"
          className="input-text"
          placeholder="Add last name"
          value={inputText.lastName}
          name="lastName"
          onChange={onChange}
        />

        <button className="input-submit">Submit</button>
      </form>
      <h2>{inputText.fName}</h2>
      <h2>{inputText.lastName}</h2>
    </>
  )
}

export default InputTodo