import { useState } from 'react';
import './App.css';
import AddContact from './components/AddContact/AddContact';
import ContactList from './components/ContactList/ContactList';

function App() {
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    // console.log(contact);
    setContacts([
      ...contacts,
      { id: Math.ceil(Math.random() * 100), ...contact },
    ]);
  };
  const deleteHandler = (id) => {
    // console.log('click');
    const filteredContacts = contacts.filter((c) => c.id !== id);
    setContacts(filteredContacts);
  };
  return (
    <main className="App">
      <h1>Contact App</h1>
      <AddContact addContactHandler={addContactHandler} />
      {/* <section> Add contact</section> */}
      <ContactList contacts={contacts} onDelete={deleteHandler} />
    </main>
  );
}

export default App;
