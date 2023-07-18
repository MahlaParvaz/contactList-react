import './ContactList.css';
import userImage from '../../assets/img/user.webp';
import { Link } from 'react-router-dom';
const ContactList = ({ contacts, onDelete }) => {
  return (
    <section className="contactList">
      <div>
        <h2>Contacts</h2>
        <Link to="/add">
          <button>Add</button>
        </Link>
      </div>
      {contacts.map((contact) => {
        const { name, email, id } = contact;
        return (
          <div className="item" key={id}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={userImage} alt="user" />

              <div>
                <p>name:{name}</p>
                <p>email:{email}</p>
              </div>
            </div>
            <button onClick={() => onDelete(id)}>delete</button>
          </div>
        );
      })}
    </section>
  );
};

export default ContactList;
