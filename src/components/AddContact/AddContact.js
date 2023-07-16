import { useState } from 'react';
import './AddContact.css';
const AddContact = ({ addContactHandler }) => {
  const [contact, setContact] = useState({ name: '', email: '' });
  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const submitForm = (e) => {
    if (!contact.name || !contact.email) {
      alert('all filds are mantory');
      return;
    }
    e.preventDefault();
    addContactHandler(contact);
    setContact({ name: '', email: '' });
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
