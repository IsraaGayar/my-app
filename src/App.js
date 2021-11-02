
import img from "./img/avatar.png"
import React from "react";
import { Link } from "react-router-dom";


export class MyNavbar extends React.Component {


    render() { 
        return <div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <span className="navbar-brand" onClick={this.props.callPage} id='login'>Navbar</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar"  aria-controls="collapsibleNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ">
                    <li className="nav-item"   name='phonebook' >
                        <Link className="nav-link" to='/namelist' id="phonebook" >
                        phonebook
                            </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/todo' id='todolist'>
                            ToDo List
                            </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/register' id='todolist'>
                            Registraion
                            </Link>
                    </li>
                    <li className="nav-item floatright" >
                        <Link className="nav-link usernameclass" to='/login' id='login'>
                            { (this.props.username!='') ? this.props.username : 'Log In'}
                            </Link>
                    </li>    
                    </ul>
                </div>  
            </nav>
        </div>;
    }
}



export class ContactsForm extends React.Component {

    state={
        Email: '',
        password:'',
        loginfailed:false
    }

    

    login=(e)=>{
        e.preventDefault();
        this.setState({Email:e.target.Email.value,
            password:e.target.password.value},()=>{

        if (this.state.Email=='admin' && this.state.password=='admin'){
            this.props.login(this.state.Email);
            this.setState({loginfailed:false});
            this.props.history.replace('/namelist')
        }else{
            this.setState({loginfailed:true})
            this.setState({Email:'',password: ''});
        } })
    }

   


    render() { 

        return (  
        <div className='container-fluid  logInpage row'>
            <div className='loginContainer col-lg-5 col-11'>
            <form onSubmit={this.login}>
            <div className="form-group">
                <div className="imgcontainer">
                    <img src={img} alt="Avatar" className="avatar"/>
                </div>

                <label className="fs-4" >Name</label>
                <input name="Email" autoFocus type="text" className="form-control"  placeholder="adim" onChange={this.ChangeHandler}/>
               
                <label className="fs-4"  >Password</label>
                <input name="password" type="password" className="form-control" placeholder="admin" onChange={this.ChangeHandler}/>
            </div>
                {this.state.loginfailed && <p className='aligncenter'>Wrong username and password</p>}
                <button className="btn btn-primary btn-sm submitButton"  >  LogIn  </button>
               </form> 
            </div>

        </div>)
    }
}

 