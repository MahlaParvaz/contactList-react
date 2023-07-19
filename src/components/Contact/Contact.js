import { Link } from 'react-router-dom';
import userImage from '../../assets/img/user.webp';

const Contact = ({ contact, onDelete }) => {
  const { name, email, id } = contact;

  return (
    <div key={id} className="item">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={userImage} alt="user" />
        <Link
          to={{ pathname: `user/${id}`, state: { contact: contact } }}
          className="itemContacts"
        >
          <div>
            <p>name: {name}</p>
            <p>email: {email}</p>
          </div>
        </Link>
      </div>
      <div>
        <Link to={`/edit/${id}`}>
          <button className="editBtn">Edit</button>
        </Link>
        <button className="deleteBtn" onClick={() => onDelete(contact.id)}>
          delete
        </button>
      </div>
    </div>
  );
};

export default Contact;
