import React from "react";
import Phonebook from './Phonebook';



class NameList extends React.Component {

    constructor(){
        super();
        this.state={
            formdisplayclass:'FormGone',
            search:'',
            searchedcontacts:[],
            contactsList: [
                {Name:"Israa fathalla ismail el-Gayar", Number:"0100034203"},
                {Name:"Ismail Fathalla El-Gayar", Number:"0100055555"},
                {Name:"Ibrahim fathalla El-Gayar", Number:"0101022000"}
            ]
        }
    }

    AddItem=()=>{ 
        this.setState({formdisplayclass:'FormOnDisplay' })
    }
    DismissForm=(contact)=>{
        if (contact != null)
        {
            let mylist=[...this.state.contactsList];
            mylist.push(contact);
            this.setState({contactsList: mylist})
        }
        this.setState({formdisplayclass:'FormGone' })
        console.log(contact);
    }

    DeleteContact=(contact)=>{
        // let mylist=[...this.state.contactsList];
        const mylist=this.state.contactsList.filter((contacts)=> {console.log(contact);return contacts != contact; });
        console.log(mylist);
        this.setState({contactsList: mylist})
    }

    searchContacts=(e)=>{
        if(e.target.value==''){
            this.setState({searchedcontacts: this.state.contactsList});
            console.log(4);
        }else{
            this.setState({search:'', contactsList: this.state.searchedcontacts});
            console.log(5);
 
        }
        console.log(this.state.searchedcontacts);
    }
    SearchName=(e)=>{
        // this.setState({search: e.target.value});
        this.state.search= e.target.value;
        this.state.contactsList=this.state.searchedcontacts;

        const mylist=this.state.contactsList.filter((contacts)=> {
            if (contacts.Name.includes(this.state.search) || contacts.Number.includes(this.state.search) ){
            return contacts; }
        });

        this.setState({contactsList: mylist});
    }


    render() { 
        return (<div className='container'>
            <h1 className='centeralign' >My Phone Book </h1>
            <input type="text" className="form-control" id="searchName" value={this.state.search} placeholder="Search contacts" onChange={this.SearchName} onFocus={this.searchContacts}/>
            <ClientRows contactsList={this.state.contactsList} onDelete={this.DeleteContact}></ClientRows>
            <button className="btn btn-primary submitButton"  onClick={this.AddItem}> Add new contact </button>
            <ContactsForm className={this.state.formdisplayclass} onDismiss={this.DismissForm} > </ContactsForm>

        </div>);
    }

}

class ClientRows extends React.Component {


    render() { 

        return (<div className='container namesList' style={{backgroundColor: "lightblue"}}>
            <div className='row'>
            <h2 className='col-lg-5'>Name</h2>
            <h2 className='col-lg-5'>Phone</h2>
            <span className='col-lg-2'></span>
            </div>

            {this.props.contactsList.length==0 && <h2 className='centeralign'>No Names</h2> }
            {this.props.contactsList.map((item,i)=>{
                return(
                <div key={i} className='row'>
                    <span   className='col-lg-5' key={i+item.Name}>{item.Name}</span>
                    <span   className='col-lg-4' key={i+item.Number}>{item.Number}</span>
                    <button className='col-lg-2 col-6 btn btn-primary floatright' key={i+'button'} onClick={()=>this.props.onDelete(item)}>delete</button>
                 </div> )
            })}
            
        </div>);
    }
}

class ContactsForm extends React.Component {

    state={
        Name: '',
        Number:'',
    }
    ChangeName=(e)=>{
        this.setState({Name: e.target.value});
        // console.log(e)
    }

    ChangeNumber=(e)=>{
        this.setState({Number: e.target.value});
        // console.log(e)
    }

    AddContact=()=>{
        if (this.state.Name!= '')
        {let contact={
            Name: this.state.Name,
            Number: this.state.Number
        }
        this.props.onDismiss(contact);}
        else{
            this.props.onDismiss();
        }
        this.setState({Name:'',Number: ''});
    }


    render() { 

        return (
        <div className={'container ContactsForm '+ this.props.className} >
            
                <h2  className='centeralign'> New Contact </h2>
            <div className="form-group">
                <label className="fs-3" >Name</label>
                <input type="text" className="form-control" id="ContactName" value={this.state.Name} placeholder="Enter Name" onChange={this.ChangeName}/>
            </div>
            <div className="form-group">
                <label className="fs-3"  >Phone Number</label>
                <input type="intger" className="form-control" id="ContactNumber" value={this.state.Number} placeholder="Enter Number" onChange={this.ChangeNumber}/>
            </div>

            <button className="btn btn-primary submitButton" onClick={this.AddContact}>Add to contacts</button>
            

        </div>);
    }
}


 



 
export default NameList;
