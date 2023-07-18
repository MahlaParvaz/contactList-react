import { useEffect, useState } from 'react';
import './App.css';
import AddContact from './components/AddContact/AddContact';
import ContactList from './components/ContactList/ContactList';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import ContactDetail from './components/ContactDetail/ContactDetail';
import axios from 'axios';
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
  useEffect(() => {
    // const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    // if (savedContacts) setContacts(savedContacts);
    const getContacts = async () => {
      const { data } = await axios.get('http://localhost:3001/contacts');
      setContacts(data);
    };
    getContacts();
  }, []);
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  return (
    <Router>
      <main className="App">
        <h1>Contact App</h1>
        <Switch>
          <Route path="/user/:id" component={ContactDetail} />
          <Route
            path="/add"
            render={(props) => (
              <AddContact addContactHandler={addContactHandler} {...props} />
            )}
          />
          <Route
            path="/"
            exact
            render={(props) => (
              <ContactList
                contacts={contacts}
                onDelete={deleteHandler}
                {...props}
              />
            )}
          />
        </Switch>
        {/* // <AddContact addContactHandler={addContactHandler} />
      // <ContactList contacts={contacts} onDelete={deleteHandler} /> */}
      </main>
    </Router>
  );
}

export default App;
