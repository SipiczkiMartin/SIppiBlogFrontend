import React from "react";
import TodoItem from "./TodoItem";

class TodosList extends React.Component{
    render(){
        //receive and render the data from TodoContainer sent here as props
        //need to provide key!! react thing
        //handleChangeProps is the method from parent to change checkboxes.. we propagate it like this to the child component
        return (
            <ul>
                {this.props.todos.map(todo => (
                 <TodoItem
                  key={todo.id}
                  todo={todo}
                  handleChangeProps={this.props.handleChangeProps}
                  deleteTodoProps={this.props.deleteTodoProps}
                 />
                ))}
            </ul>
        );
    }
}

export default TodosList