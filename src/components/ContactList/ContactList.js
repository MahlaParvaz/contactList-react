import './ContactList.css';
import { Link } from 'react-router-dom';
import Contact from '../Contact/Contact';
const ContactList = ({ contacts, onDelete }) => {
  return (
    <section className="listWrapper">
      <div className="contactList">
        <div className="contactHeader">
          <h2>Contacts</h2>
          <Link to="/add">
            <button>Add</button>
          </Link>
        </div>
        {contacts.map((contact) => {
          return (
            <Contact key={contact.id} contact={contact} onDelete={onDelete} />
          );
        })}
      </div>
    </section>
  );
};

export default ContactList;
