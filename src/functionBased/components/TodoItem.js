import React, {useState,useEffect} from "react";
//with this we import css module for this specific class or file..
import styles from "./TodoItem.module.css"
import { FaTrash } from "react-icons/fa"


const TodoItem = props => {
    const [editing, setEditing] = useState(false)

    const handleEditing = () =>{
        setEditing(true)
    }

    const handleUpdatedDone = event => {
        if(event.key === "Enter"){
            setEditing(false)
        }
    }

    //bcs we have a function inside return and an empty array the useEffect will trigger only when the component
    //is about to unmount... so we can do necessary cleanup here functions as componentDidUnmount
    useEffect(()=>{
        return () =>{
            console.log("Cleaning up...")
        }
    },[])
    
    const completedStyle = {
        fontSize: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
    }

        //this whole thing is for the edit mode, change the view after double clicking a todoItem
    let viewMode = {}
    let editMode = {}

    if(editing){
        viewMode.display = "none"
    }else{
        editMode.display = "none"
    }

    const {completed, id, title} = props.todo

    return (
            <li className={styles.item}>
                <div onDoubleClick={handleEditing} style={viewMode}>
                    <input
                    className={styles.checkbox}
                    type="checkbox"
                    checked={completed}
                    onChange={() => props.handleChangeProps(id)}
                    /> 
                    <button
                    onClick={() => props.deleteTodoProps(id)}>
                    <FaTrash style={{ color: "orangered", fontSize: "16px" }} />
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
                    props.setUpdate(e.target.value, id)
                }}
                onKeyDown={handleUpdatedDone}
                />
            </li>
    )
}



export default TodoItem;