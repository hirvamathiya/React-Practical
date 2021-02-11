import React ,{useState} from 'react';
import {useDispatch} from 'react-redux';
import { addContact} from '../../actions/contactActions';
import {useHistory} from 'react-router-dom';


const AddContact = () => {
    
    let history = useHistory();
    const dispatch = useDispatch();
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");

    const createContact = () =>{
        const new_contact={
            name:name,
            phone:phone,
            email:email
        };
        dispatch(addContact(new_contact));
        history.push("/");
    }

    return (
        <div className="card border-0 shadow">
            <div className="card-header">Add your contact</div>
            <div className="card-body">
                <form onSubmit={createContact}>
                   <div className="form-group">
                    <input type="text" className="form-control" 
                    placeholder="Enter contact name" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                   <div className="form-group">
                    <input type="text" className="form-control"
                     placeholder="Enter contact phone number" value={phone} onChange={(e) => setPhone(e.target.value)}/>  
                    </div>
                    <div className="form-group">
                     <input type="text" className="form-control" 
                     placeholder="Enter contact email" value={email} onChange={(e) => setEmail(e.target.value)} />  
                    </div>
                    <button className="btn btn-primary" type="submit">Create New Contact</button>
                </form>
            </div>
        </div>
    )
};

export default AddContact;
