import React from 'react';

class MyNavbar extends React.Component {

    // callPage=()=>{
    //     // console.log(e.target.innerText)
    //     this.props.callpage();
    // }

    render() { 
        return <div>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <span class="navbar-brand" onClick={this.props.callPage} name='home'>Navbar</span>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                    <li class="nav-item"  onClick={this.props.callPage} name='phonebook' >
                        {/* <span class="nav-link"> */}
                            PhoneBook
                            {/* </span> */}
                    </li>
                    <li class="nav-item" onClick={this.props.callPage}>
                        {/* <span class="nav-link" onClick={this.props.callPage} name='todolist'> */}
                            ToDo List
                            {/* </span> */}
                    </li>
                    <li class="nav-item floatright" onClick={this.props.callPage}>
                        {/* <span class="nav-link" onClick={this.props.callPage} name='Login'> */}
                            Log In
                            {/* </span> */}
                    </li>    
                    </ul>
                </div>  
            </nav>
        </div>;
    }
}
 
export default MyNavbar;