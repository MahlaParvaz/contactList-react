import { useState } from 'react';
import addContactsService from '../../services/addContactsService';
import './AddContact.css';
const AddContact = ({ history }) => {
  const [contact, setContact] = useState({ name: '', email: '' });

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const submitForm = async (e) => {
    if (!contact.name || !contact.email) {
      alert('all filds are mantory');
      return;
    }
    e.preventDefault();
    try {
      await addContactsService(contact);
      setContact({ name: '', email: '' });
      history.push('/');
      // setContacts(data);
    } catch (error) {}
    // addContactHandler(contact);
  };
  return (
    <form onSubmit={submitForm}>
      <div className="formControl">
        <lable>name</lable>
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={changeHandler}
        />
      </div>
      <div className="formControl">
        <lable>email</lable>
        <input
          type="text"
          name="email"
          value={contact.email}
          onChange={changeHandler}
        />
      </div>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default AddContact;
