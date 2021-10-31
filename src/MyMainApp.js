import React from "react";
import NameList from "./NameList";
import Todo2 from "./Todo2";
import img from "./img/avatar.png"


class MyMainApp extends React.Component {

    constructor(){
        super();
        this.state={
            currentpage:"login",
            username:''
        }
    }

    callCupage=(e)=>{
        this.setState({currentpage: e.target.id})
     }

    Didlogin=(user)=>{
        if (user!=''){
            this.setState({username: user})
            this.setState({currentpage:'phonebook'})
        }
    }
 
    // phonebook ToDo List  LogIn
    render() { 
        return <div>
            <MyNavbar callPage={this.callCupage} username={this.state.username}></MyNavbar>
            { this.state.currentpage=='phonebook'&& <NameList></NameList>}
            { this.state.currentpage=='todolist'&& <Todo2></Todo2>}
            { this.state.currentpage=='login'&& <ContactsForm  login={this.Didlogin}></ContactsForm>}
        </div>;
    }
}

class MyNavbar extends React.Component {

  

    render() { 
        return <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <span className="navbar-brand" onClick={this.props.callPage} id='login'>Navbar</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                    <li className="nav-item"   name='phonebook' >
                        <span className="nav-link" onClick={this.props.callPage} id="phonebook" >
                        phonebook
                            </span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link" onClick={this.props.callPage} id='todolist'>
                            ToDo List
                            </span>
                    </li>
                    <li className="nav-item floatright" >
                        <span className="nav-link usernameclass" onClick={this.props.callPage} id='login'>
                            { (this.props.username!='') ? this.props.username : 'Log In'}
                            </span>
                    </li>    
                    </ul>
                </div>  
            </nav>
        </div>;
    }
}



class ContactsForm extends React.Component {

    state={
        Email: '',
        password:'',
        loginfailed:false
    }
 
    ChangeHandler=(e)=>{
        this.setState({ [e.target.name]: e.target.value});
    }

    loginn=()=>{
        if (this.state.Email=='admin' && this.state.password=='admin'){
            this.props.login(this.state.Email);
            this.setState({loginfailed:false})
        }else{
            this.setState({loginfailed:true})
            this.setState({Email:'',password: ''});
        }
    }


    render() { 

        return (  
        <div className='container-fluid  logInpage row'>
            <div className='loginContainer col-lg-5 col-11'>
            
            <div className="form-group">
                <div className="imgcontainer">
                    <img src={img} alt="Avatar" className="avatar"/>
                </div>

                <label className="fs-4" >Name</label>
                <input name="Email" autoFocus type="text" className="form-control" value={this.state.Email} placeholder="adim" onChange={this.ChangeHandler}/>
               
                <label className="fs-4"  >Password</label>
                <input name="password" type="password" className="form-control" value={this.state.password} placeholder="admin" onChange={this.ChangeHandler}/>
            </div>
                {this.state.loginfailed && <p className='aligncenter'>Wrong username and password</p>}
                <button className="btn btn-primary btn-sm submitButton" onClick={this.loginn}>  LogIn  </button>
            </div>

        </div>)
    }
}

 
export default MyMainApp;