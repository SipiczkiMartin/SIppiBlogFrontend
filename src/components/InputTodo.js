import React from "react";

class InputTodo extends React.Component{
    state={
        title: ""
    };

    //this is how to process states for a form with more then one inputs
    //you need to specify the name attribute in the element and than use it to update the state
    //of course we need states with equal names as those attributes to update....
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    //sending the title from user input to the container using props delegated function
    //we clear the input field with the setState function here
    handleSubmit = e =>{
        e.preventDefault();
        this.props.addTodoProps(this.state.title);
        this.setState({
            title: ""
        });
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                name="title"
                type="text" 
                placeholder="Add todo..." 
                value={this.state.title}
                onChange={this.onChange}
                />
                <button>Submit</button>
            </form>
        )
    }
}

export default InputTodo