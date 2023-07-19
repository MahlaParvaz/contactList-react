import './ContactList.css';
import { Link } from 'react-router-dom';
import Contact from '../Contact/Contact';
import { useEffect, useState } from 'react';
import getContactsService from '../../services/getContactsService';
import deleteContactsService from '../../services/deleteContactsService';
import { FaSearch } from 'react-icons/fa';
const ContactList = ({ onDelete }) => {
  const [contacts, setContacts] = useState(null);
  const [searchItem, setSearchItem] = useState('');
  const [allContacts, setAllContacts] = useState(null);
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
      setAllContacts(data);
    };
    try {
      getContacts();
    } catch (error) {}
  }, []);
  const searchHandler = (e) => {
    setSearchItem(e.target.value);
    const search = e.target.value;
    if (search !== '') {
      const searchItems = allContacts.filter((c) => {
        return Object.values(c)
          .join('')
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setContacts(searchItems);
    } else {
      setContacts(allContacts);
    }
  };
  return (
    <section className="listWrapper">
      <div className="contactList">
        <div className="contactHeader">
          <h2>Contacts</h2>
          <Link to="/add">
            <button>Add</button>
          </Link>
        </div>
        <div className="searchBox">
          <input type="text" onChange={searchHandler} value={searchItem} />
          <FaSearch className="searchIcon" />
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
