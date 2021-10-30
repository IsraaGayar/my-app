import React from "react";

class ToDoList extends React.Component {
    constructor(){
        super();
        this.state={
            myTasks:[

            ]
        }

    }

    render() { 
        console.log(this.myTasks)
        return (
        <div>
            <List> </List>
            <AddForm > </AddForm>
    

        </div>);
    }
}
 
class List extends React.Component{
   
    constructor(){
        super();
        this.state={
            currentTask:'my task'
        }
    }

    render() { 
        return (
        <div>
            <ListElement></ListElement>
        </div>);
    }
    
}
class ListElement extends React.Component{

    constructor(){
        super();
        this.state={
            currentTask:'my task'
        }
    }


    render() { 
        return (
        <div>
            <span>{this.state.currentTask}</span>
            <button >edit</button>
            <button >delete</button>
        </div>);
    }
    
}

class AddForm extends React.Component {
   
    constructor(){
        super();
        this.state={
            title:"ahmed",
            tName:"",
            tasks:[]
        }
    }
    changeValue=(e)=>{
        this.setState({title: e.target.value});

    }
    changeTitle=()=>{
        this.state.tasks.push(this.state.title);
        this.setState({title: "" });
    }
    render(){
        return(
            <div>
                <input type='text' value={this.state.title} onChange={this.changeValue}/>
                <button onClick={this.changeTitle}>change value</button>
                <h1>{this.state.tasks}</h1>
            </div>
        )
    }
}
 

export default ToDoList;