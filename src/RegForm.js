import React from 'react';
import Joi from 'joi';


class RegForm extends React.Component {

    state={
        name:'',
        password:'',
        email:'',
        age:'',
        errors:[{message:''}]
    }


    schema = Joi.object({
        name: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),
    
        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    
        // repeat_password: Joi.ref('password'),
    
        age: Joi.number()
            .integer()
            .min(5)
            .max(50),
    
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    })
 
    ChangeHandler=(e)=>{
        this.setState({ [e.target.name]: e.target.value});
    }

    submitform=()=>{
        const obj={...this.state};
        delete obj.errors;
        const res=this.schema.validate(obj,{abortEarly:false});
        if (res.error==null){this.props.history.replace('/todo')
            }else{  
            // res.error.details.forEach((error,ind)=>{
            //     this.state.errors[ind]={ [error.path] : error.message});
            // }
            this.setState({ errors: res.error.details}) ;
            console.log(this.state.errors[0].message
                );}
    }


    render() { 
        return (
        <div className='container-fluid  logInpage row'>
            <div className='loginContainer col-lg-5 col-11'>
            
            <div className="form-group">
                <label className="fs-5" >Name</label>
                <input name="name" autoFocus type="text" className="form-control"  placeholder="name" onChange={this.ChangeHandler}/>

                <label className="fs-5" >Age</label>
                <input name="age" autoFocus type="text" className="form-control"  placeholder="age" onChange={this.ChangeHandler}/>

                <label className="fs-5" >Email</label>
                <input name="email" autoFocus type="email" className="form-control"  placeholder="email" onChange={this.ChangeHandler}/>
            
                <label className="fs-5"  >Password</label>
                <input name="password" type="password" className="form-control"  placeholder="admin" onChange={this.ChangeHandler}/>
            </div>
                {this.state.errors!=null && <p className='aligncenter'>{this.state.errors[0].message}</p>}
                <button className="btn btn-primary btn-sm submitButton" onClick={this.submitform} >  LogIn  </button>
            </div>
         </div>);
    }
}
 
export default RegForm;