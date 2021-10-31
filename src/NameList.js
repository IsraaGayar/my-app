import React from "react";



class NameList extends React.Component {

    constructor(){
        super();
        this.state={
            formdisplayclass:'FormGone',
            pageopacity: 'mypage',
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
        this.setState({formdisplayclass:'FormOnDisplay' });
        this.setState({pageopacity:'mypagedis'});
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
        this.setState({pageopacity:'mypage'});
    }

    DeleteContact=(contact)=>{
        // let mylist=[...this.state.contactsList];
        const mylist=this.state.contactsList.filter((contacts)=> {console.log(contact);return contacts != contact; });
        console.log(mylist);
        this.setState({contactsList: mylist})
    }


    SearchName=(e)=>{
        this.setState({search: e.target.value});

    }

    render() { 
        return (<div className='container'>
            <div className={this.state.pageopacity}>
            <h1 className='centeralign' >My Phone Book </h1>
            {/* <input type="text" className="form-control" id="searchName" value={this.state.search} placeholder="Search contacts" onChange={this.SearchName} onFocus={this.searchContacts} autofocus/> */}

            <input type="text" className="form-control" id="searchName" value={this.state.search} placeholder="Search contacts" onChange={this.SearchName}  autoFocus/>
            <ClientRows contactsList={this.state.contactsList} onDelete={this.DeleteContact} search={this.state.search}></ClientRows>
            <button className="btn btn-primary submitButton"  onClick={this.AddItem}> Add new contact </button>
            </div>
            <ContactsForm className={this.state.formdisplayclass} onDismiss={this.DismissForm} > </ContactsForm>

        </div>);
    }

}

class ClientRows extends React.Component {


    render() { 

        return (<div className='container namesList' >
            <div className='row'>
            <h2 className='col-lg-5'>Name</h2>
            <h2 className='col-lg-5'>Phone</h2>
            <span className='col-lg-2'></span>
            </div>

            {this.props.contactsList.length==0 && <h2 className='centeralign'>No Names</h2> }
            {this.props.contactsList.filter((contacts)=> {
            if (contacts.Name.includes(this.props.search) || contacts.Number.includes(this.props.search) ){
            return contacts; }
             }).map((item,i)=>{
                return(
                <div key={i} className='row contactdetails'>
                    <span   className='col-lg-5' key={i+item.Name}>{item.Name}</span>
                    <span   className='col-lg-4' key={i+item.Number}>{item.Number}</span>
                    <button className='col-lg-2 col-6 btn btn-primary floatright' key={i+'button'} onClick={()=>this.props.onDelete(item)}>delete</button>
                 </div> )
            })
            }
            {/* {this.props.contactsList.map((item,i)=>{
                return(
                <div key={i} className='row contactdetails'>
                    <span   className='col-lg-5' key={i+item.Name}>{item.Name}</span>
                    <span   className='col-lg-4' key={i+item.Number}>{item.Number}</span>
                    <button className='col-lg-2 col-6 btn btn-primary floatright' key={i+'button'} onClick={()=>this.props.onDelete(item)}>delete</button>
                 </div> )
            })} */}
            
        </div>);
    }
}

class ContactsForm extends React.Component {

    state={
        Name: '',
        Number:'',
    }
    // ChangeName=(e)=>{
    //     this.setState({Name: e.target.value});
    //     // console.log(e)
    // }

    // ChangeNumber=(e)=>{
    //     this.setState({Number: e.target.value});
    //     // console.log(e)
    // }
    ChangeHandler=(e)=>{
        // let property= e.target.name;
        this.setState({ [e.target.name]: e.target.value});
        // console.log(this.state);
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
                <input name="Name" autofocus type="text" className="form-control" id="ContactName" value={this.state.Name} placeholder="Enter Name" onChange={this.ChangeHandler}/>
            </div>
            <div className="form-group">
                <label className="fs-3"  >Phone Number</label>
                <input name="Number" type="intger" className="form-control" id="ContactNumber" value={this.state.Number} placeholder="Enter Number" onChange={this.ChangeHandler}/>
            </div>

            <button className="btn btn-primary submitButton" onClick={this.AddContact}>Add to contacts</button>
            

        </div>);
    }
}


 



 
export default NameList;
