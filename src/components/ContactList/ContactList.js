import './ContactList.css';
import { Link } from 'react-router-dom';
import Contact from '../Contact/Contact';
import { useEffect, useState } from 'react';
import getContactsService from '../../services/getContactsService';
import deleteContactsService from '../../services/deleteContactsService';
const ContactList = ({ onDelete }) => {
  const [contacts, setContacts] = useState(null);
  const deleteHandler = async (id) => {
    try {
      await deleteContactsService(id);
      const filteredContacts = contacts.filter((c) => c.id !== id);
      setContacts(filteredContacts);
    } catch (error) {}
  };
  useEffect(() => {
    const getContacts = async () => {
      const { data } = await getContactsService();
      setContacts(data);
    };
    try {
      getContacts();
    } catch (error) {}
  }, []);

  return (
    <section className="listWrapper">
      <div className="contactList">
        <div className="contactHeader">
          <h2>Contacts</h2>
          <Link to="/add">
            <button>Add</button>
          </Link>
        </div>
        {contacts ? (
          contacts.map((contact) => {
            return (
              <Contact
                key={contact.id}
                contact={contact}
                onDelete={deleteHandler}
              />
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
};

export default ContactList;
