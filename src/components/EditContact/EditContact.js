import { useEffect, useState } from 'react';
import getOneContactService from '../../services/getOneContactService';
// import './AddContact.css';
const EditContact = ({ editContactHandler, history, match }) => {
  const [contact, setContact] = useState({ name: '', email: '' });
  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const submitForm = (e) => {
    if (!contact.name || !contact.email) {
      alert('All fields are mandatory');
      return;
    }
    e.preventDefault();
    editContactHandler(contact, match.params.id);
    setContact({ name: '', email: '' });
    history.push('/');
  };

  useEffect(() => {
    const localFetch = async () => {
      try {
        const { data } = await getOneContactService(match.params.id);
        setContact({ name: data.name, email: data.email });
      } catch (error) {}
    };
    localFetch();
  }, []);
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
      <button type="submit">Edit Contact</button>
    </form>
  );
};

export default EditContact;
