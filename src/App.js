import { useEffect, useState } from 'react';
import './App.css';
import AddContact from './components/AddContact/AddContact';
import ContactList from './components/ContactList/ContactList';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import ContactDetail from './components/ContactDetail/ContactDetail';
import getContactsService from './services/getContactsService';
import deleteContactsService from './services/deleteContactsService';
import addContactsService from './services/addContactsService';
import EditContact from './components/EditContact/EditContact';
function App() {
  const [contacts, setContacts] = useState([]);
  const addContactHandler = async (contact) => {
    try {
      const { data } = await addContactsService(contact);
      setContacts([...contacts, data]);
      // setContacts(data);
    } catch (error) {}
  };
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
    <Router>
      <main className="App">
        <h1>Contact App</h1>
        <Switch>
          <Route path="/edit/:id" component={EditContact} />
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
      </main>
    </Router>
  );
}

export default App;
