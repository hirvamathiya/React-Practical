import React ,{useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getContact, updateContact} from '../../actions/contactActions';
import {useHistory} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';

const EditContact = () => {
    
    let { id } = useParams();
    let history = useHistory();
    const dispatch = useDispatch();
    const contact = useSelector((state) => state.contact.contact);
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");

    const onUpdateContact = (e) =>{
        e.preventDefault();
        const update_contact = Object.assign(contact,{
            name:name,
            phone:phone,
            email:email
        }); 
        dispatch(updateContact(update_contact));
        history.push("/");
    };

    useEffect(() =>{
        if(contact !=null){
            setName(contact.name)
            setPhone(contact.phone)
            setEmail(contact.email)
        }
        dispatch(getContact(id));
    }, [contact]);

    return (
        <div className="card border-0 shadow">
            <div className="card-header">Edit your contact</div>
            <div className="card-body">
                <form onSubmit={(e) => onUpdateContact(e)}>
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
                    <button className="btn btn-warning text-white" type="submit">Edit & Save your Contact</button>
                </form>
            </div>
        </div>
    )
};

export default EditContact;
