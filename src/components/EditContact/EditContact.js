import { useEffect, useState } from 'react';
import getContactsService from '../../services/getContactsService';
import getOneContactService from '../../services/getOneContactService';
import updateContactService from '../../services/updateContactService';
// import './AddContact.css';
const EditContact = ({ history, match }) => {
  const [contact, setContact] = useState({ name: '', email: '' });
  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const submitForm = async (e) => {
    if (!contact.name || !contact.email) {
      alert('All fields are mandatory');
      return;
    }
    e.preventDefault();
    // const { data } = await updateContactService(contact, match.params.id);
    // editContactHandler(contact, match.params.id);
    try {
      await updateContactService(contact, match.params.id);
      //   await getContactsService();
      //   setContact({ name: '', email: '' });
      history.push('/');
    } catch (error) {}
  };
  //   const editContactHandler = async (contact, id) => {
  //     try {
  //       await updateContactService(contact, id);
  //       const { data } = await getContactsService();
  //       setContacts(data);
  //     } catch (error) {}
  //   };
  useEffect(() => {
    // const localFetch = async () => {
    //   try {
    //     const { data } = await getOneContactService(match.params.id);
    //     setContact({ name: data.name, email: data.email });
    //   } catch (error) {}
    // };
    // localFetch();
    getOneContactService(match.params.id)
      .then((res) => setContact({ name: res.data.name, email: res.data.email }))
      .catch();
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
