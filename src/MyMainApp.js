import React from "react";
import NameList from "./NameList";
import Todo2 from "./Todo2";
import {MyNavbar} from './App';
import { ContactsForm } from "./App";
import { Route, Switch , BrowserRouter } from 'react-router-dom';
import RegForm from "./RegForm";



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
            <Switch>
                <Route path='/namelist'>
                    <NameList></NameList>
                </Route>    
                <Route path='/todo'>
                     <Todo2></Todo2>
                </Route>
                <Route path='/login' render={(props)=> 
                     <ContactsForm  login={this.Didlogin} {...props} ></ContactsForm> }>
                </Route>
                <Route path='/register' component={RegForm}>
                     {/* <RegForm props={this.props}/> */}
                </Route>
            </Switch>
        </div>;
    }
}
{/* 
            <MyNavbar callPage={this.callCupage} username={this.state.username}></MyNavbar>
            { this.state.currentpage=='phonebook'&& <NameList></NameList>}
            { this.state.currentpage=='todolist'&& <Todo2></Todo2>}
            { this.state.currentpage=='login'&& <ContactsForm  login={this.Didlogin}></ContactsForm>} */}
export default MyMainApp;