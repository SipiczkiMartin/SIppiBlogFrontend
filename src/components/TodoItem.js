import React from "react";
//with this we import css module for this specific class or file..
import styles from "./TodoItem.module.css"
class TodoItem extends React.Component{
    render(){
        const completedStyle = {
            fontSize: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
        }
        //deconstructing props to have variables.. the vars have to have the same name as in the todo prop
        const {completed, id, title} = this.props.todo
        return (
            <li className={styles.item}>
                <input
                className={styles.checkbox}
                type="checkbox"
                checked={completed}
                onChange={() => this.props.handleChangeProps(id)}
                /> 
                <button
                  onClick={() => this.props.deleteTodoProps(id)}>
                   Delete
                </button>
                <span style={completed ? completedStyle : null}>
                    {title}
                </span>
            </li>
        )
    }

}

export default TodoItem;