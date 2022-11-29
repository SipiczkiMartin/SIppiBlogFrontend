import React, {useState, useEffect} from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";

const TodoContainer = () =>{
    const [todos, setTodos] = useState(getIntialTodos())
    
    const handleChange = id => {
        setTodos(prevState =>
            prevState.map(todo => {
                if(todo.id === id){
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                }
                return todo
            })
        )
    };
    
    const delTodo = id =>{
        setTodos([
            ...todos.filter(todo => {
                return todo.id !== id
            }),
        ])
    }

    const addTodoItem = title =>{
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        setTodos([...todos, newTodo])
    }

    const setUpdate = (updatedTitle, id) => {
        setTodos(
            todos.map(todo => {
                if(todo.id === id){
                    todo.title = updatedTitle
                }
                return todo
            })
        )
    }

    //this hook runs by default after the first render and state or prop changes
    //we can control when what happens using an array
    // useEffect(() => {
    //     //getting stored items/ componentDidMount in class based
    //     const temp = localStorage.getItem("todos")
    //     const loadedTodos = JSON.parse(temp)

    //     if(loadedTodos){
    //         setTodos(loadedTodos)
    //     }
    // },[setTodos])


    //we are using this function to render only once, we are calling this in the useState bcs it returns and 
    //empty array or the saved todos
    function getIntialTodos(){
        //getting stored items
        const temp = localStorage.getItem("todos")
        const savedTodos = JSON.parse(temp)
        return savedTodos || []
    }

    //this useEffect is used as componentDidUpdate in class based
    //the array says what the hook should monitor to take effect on
    useEffect(() => {
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos", temp)
    },[todos])

    return (
            <div className="container">
                <div className="inner">
                 <Header />
                 <InputTodo addTodoProps={addTodoItem} />
                 <TodosList
                  todos={todos}
                  handleChangeProps={handleChange}
                  deleteTodoProps={delTodo}
                  setUpdate={setUpdate}
                 />
                </div>
            </div>
    );
    
}

export default TodoContainer
