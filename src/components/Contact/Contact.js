import { Link } from 'react-router-dom';
import userImage from '../../assets/img/user.webp';

const Contact = ({ contact, onDelete }) => {
  const { name, email, id } = contact;

  return (
    <div className="item" key={id}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={userImage} alt="user" />
        <Link to={{ pathname: `user/${id}`, state: { contact: contact } }}>
          <div>
            <p>name:{name}</p>
            <p>email:{email}</p>
          </div>
        </Link>
      </div>
      <button onClick={() => onDelete(contact.id)}>delete</button>
    </div>
  );
};

export default Contact;
