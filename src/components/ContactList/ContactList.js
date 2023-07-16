import './ContactList.css';
import userImage from '../../assets/img/user.webp';
const ContactList = ({ contacts, onDelete }) => {
  return (
    <section className="contactList">
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
