import React from "react";
//with this we import css module for this specific class or file..
import styles from "./TodoItem.module.css"
class TodoItem extends React.Component{
    state = {
        editing: false,
    }

    handleEditing = () =>{
        this.setState({
            editing: true,
        })
    }

    handleUpdatedDone = event => {
        if(event.key === "Enter"){
            this.setState({editing: false})
        }
    }



    render(){
        const completedStyle = {
            fontSize: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
        }

        //this whole thing is for the edit mode, change the view after double clicking a todoItem
        let viewMode = {}
        let editMode = {}

        if(this.state.editing){
            viewMode.display = "none"
        }else{
            editMode.display = "none"
        }

        //deconstructing props to have variables.. the vars have to have the same name as in the todo prop
        const {completed, id, title} = this.props.todo
        return (
            <li className={styles.item}>
                <div onDoubleClick={this.handleEditing} style={viewMode}>
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
                </div>
                <input 
                type="text" 
                className={styles.textInput} 
                style={editMode} 
                value={title}
                onChange={e => {
                    this.props.setUpdate(e.target.value, id)
                }}
                onKeyDown={this.handleUpdatedDone}
                />
            </li>
        )
    }

}

export default TodoItem;