import React from "react";


export class Todo2 extends React.Component{
    idInc=4;
    constructor(){
        super();
        this.state = {
            text:"",
            items:[{
                id:1,
                task:"Go TO ITI",
                done:false
            },{
                id:2,
                task:"Take js course",
                done:false
            },{
                id:3,
                task:"Go back home",
                done:false
            }]
        }
    }

    deleteItem=(id)=>{
        let itemIndex = this.state.items.findIndex((item)=>item.id == id);
        this.state.items.splice(itemIndex,1);
        this.setState({items:this.state.items});
    }

    toggleDone=(id)=>{
        
        let item = this.state.items.find((item)=>item.id==id)
        item.done = !item.done;
        this.setState({items:this.state.items});
    }


    addItem=(itemName)=>{
        let item= {id:'', task:'',done:false }
        item.id=this.idInc++;
        item.task=itemName;
        this.state.items.push(item);
        this.setState({items:this.state.items});
        console.log(this.state.items);
    }

    render(){
        return <div>
            <ListElements  itemsArray={this.state.items} deleteItem={this.deleteItem} toggleDone={this.toggleDone} /> 
            <Addform addnewitem={this.addItem}></Addform>
        </div>
    }
}


class ListElements extends React.Component {
    render(){
            console.log(this.props.itemsArray);

        return (
            <div>
                {this.props.itemsArray.length==0 && <h2>No Items</h2>}
                {this.props.itemsArray.map((item,ind)=>{
                    return <div style={{backgroundColor:item.done?'green':'white'} }>
                                <span>{item.task}</span>
                                <button onClick={()=>this.props.deleteItem(item.id)} >Delete</button>
                                <button onClick={()=>this.props.toggleDone(item.id)}>Done</button>
                            </div>
                })}
            </div>
        )
    }

}

class Addform extends React.Component {
    constructor(){
        super();
        this.state={
            text:''
        }
    }
    setText=(e)=>{
        this.setState({text:e.target.value})
    }
    cleanInput=()=>this.setState({text:'' });

    render(){
        return (
            <div>
                <div>
                Task :<input type="text" onChange={this.setText} value={this.state.text} />
                <button onClick={()=>{
                    this.props.addnewitem(this.state.text);
                    this.cleanInput();
                 }}>Add</button>
             </div>
            </div>
        )
    }

}

export default Todo2;