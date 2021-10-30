import React from "react";

class App2 extends React.Component{

    constructor(){
        super();
        this.state={
            title:"ahmed",
            tName:"",
           mytasks:[ {"name":"israa", "age": 30},{"name":"myhey"}]
        }
    }
    changeValue=(e)=>{
        this.setState({title: e.target.value});

    }
    changeTitle=()=>{
        let varr={ "name":this.state.title}
        this.state.mytasks.push(varr);
        this.setState({title: "" });
    }
    render(){
        let tasksUI = this.state.mytasks.map((item,ind)=>{
            console.log(this.state.mytasks);
            return <div > {item.name}</div>
        })

        // console.log(tasksUI)
        return(
            <div>
                <div>
                   {tasksUI}

                </div>
                <input type='text' value={this.state.title} onChange={this.changeValue}/>
                <button onClick={this.changeTitle}>change value</button>
                <h1>{this.tasksUI}</h1>
            </div>
        )
    }

}



export default App2;