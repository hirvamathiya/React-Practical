import React , {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Avatar from 'react-avatar';
import {deleteContact} from '../../actions/contactActions';
import {useDispatch, useSelector} from 'react-redux';
import {selectAllContact, clearAllContact, deleteAllContact} from '../../actions/contactActions';

const Contacts = () => {
    const [selectAll, setSelectAll] = useState(false);
    const dispatch = useDispatch();
    const contacts = useSelector(state =>state.contact.contacts);
    const selectedContacts = useSelector(state => state.contact.selectedContacts);

    useEffect(() =>{
        if(selectAll)
        {
            dispatch(selectAllContact(contacts.map((contact) => contact.id)));
        }
        else{
            dispatch(clearAllContact());
        }
    }, [selectAll]);
    
    return (
        <div>
            {
                selectedContacts.length > 0 ? 
                   ( <button className="btn btn-danger mb-3" 
                    onClick={() => dispatch(deleteAllContact())}>Delete All</button>):null
            }
        <table className="table shadow">
           <thead className="bg-danger text-white">
              <tr>
                <th scope="col">
                   <div className="custom-control custom-checkbox">
                   <input id="selectAll" type="checkbox" className="custom-control-input"  value={selectAll}
                   onClick={() =>setSelectAll(!selectAll)} />
                   <label htmlFor="selectAll" className="custom-control-label"></label>
                   </div>
                 </th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Actions</th>
               </tr>
            </thead>
        <tbody>
            {
                contacts.map((contact) =>(
                   <tr>
                       <td>
                        <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" checked={selectAll} />
                        <label className="custom-control-label"></label></div></td>
                       <td><Avatar className="mr-2" name={contact.name}  size="40" round={true}/> {contact.name}</td>
                       <td>{contact.phone}</td>
                       <td>{contact.email}</td>
                       <td className="actions">
                           <Link to={`/contacts/edit/${contact.id}`}>
                            <span className="material-icons mr-1">edit</span>
                            </Link>
                            <span className="material-icons text-danger" 
                            onClick={() => dispatch(deleteContact(contact.id))}>remove_circle</span>
                       </td>
                   </tr>
                ))}
        </tbody>
       </table>
      </div>
    );
}

export default Contacts;
