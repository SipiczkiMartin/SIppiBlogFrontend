import React from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";

//this is a component class extends component class from react lib
//COmponent class names must be CAPITALIZED!!!
class TodoContainer extends React.Component{
    state = {
        todos: [],
    };
    //method to handle click event on the checkboxes, changes their value
    //use setState method from React.component onl way to change a state
    //map function is used as a for each loop here
    //using prevState snapshot of the state rather that this.state
    //!! use the spred operator ... to spread properties and update only completed!!
    handleChange = id => {
        this.setState(prevState => ({
            todos: prevState.todos.map(todo=>{
                if(todo.id === id){
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                }
                return todo
            }),
        }));
    };
//using filter to create a new array excluding the item with the id returned after clicking on delete button
    delTodo = id =>{
        this.setState({
            todos:[
                ...this.state.todos.filter(todo =>{
                    return todo.id !== id;
                })
            ]
        })
    }

    //here we are using uuid generator uuidv4() need to install it first with
    //npm i uuid
    addTodoItem = title =>{
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    }

    setUpdate = (updateTitle, id) => {
        this.setState({
            todos: this.state.todos.map(todo =>{
                if(todo.id === id){
                    todo.title = updateTitle
                }
                return todo
            }),
        })
    }
//using this lifecycle method and native fetch() to get the data from server right after render...
    // componentDidMount(){
    //     fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
    //     .then(response => response.json())
    //     .then(data => this.setState({todos: data}));
    // }

    componentDidUpdate(prevProps, prevState){
        if(prevState.todos !== this.state.todos){
            const temp = JSON.stringify(this.state.todos)
            localStorage.setItem("todos",temp)
        }
    }

    componentDidMount(){
        const temp = localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)
        if(loadedTodos){
            this.setState({
                todos: loadedTodos
            })
        }
    }
    //render method for rendering jsx on the screen
    //!! component render not ReactDOM.render()!!!
    render(){
        //send the todos from here to TodosList as "props"
        return (
            <div className="container">
                <div className="inner">
                 <Header />
                 <InputTodo addTodoProps={this.addTodoItem} />
                 <TodosList
                  todos={this.state.todos}
                  handleChangeProps={this.handleChange}
                  deleteTodoProps={this.delTodo}
                  setUpdate={this.setUpdate}
                 />
                </div>
            </div>
          );
    }
}

export default TodoContainer
