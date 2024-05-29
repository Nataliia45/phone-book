import React, { useState } from 'react';
import './App.css';
import Contacts from './Contacts';
import ContactForm from './ContactForm';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';


function App() {
    const [contacts, setContacts] = useState([]);
    const [currentContact, setCurrentContact] = useState(null);
    const navigate = useNavigate();

    const addContact = (contact) => {
        setContacts([...contacts, contact]);
      };
    
      const updateContact = (updatedContact) => {
        setContacts(contacts.map(contact => (contact.id === updatedContact.id ? updatedContact : contact)));
      };
    
      const deleteContact = (id) => {
        setContacts(contacts.filter(contact => contact.id !== id));
      };

  return (

    <div className="App">
      <nav>
         <Link to="/">Список контактов</Link>
         <Link to="/add" onClick={() => setCurrentContact(null)}>Добавить контакт</Link>
      </nav>

      <Routes>
        <Route path="/" element= {
          <Contacts
          contacts={contacts}
          onDelete={deleteContact}
          onEdit={(contact) => { setCurrentContact(contact); navigate('edit'); }}
        />
        } />
        <Route path="/add" element= {
          <ContactForm
          onSave={(contact) => {
            addContact(contact);
            navigate('/');
          }}
          onCancel={() => navigate('/')}
        />
       }/>
       <Route path="/edit" element={
        <ContactForm
          contact={currentContact}
          onSave={(contact) => {
            updateContact(contact);
            navigate('/');
          }}
          onCancel={() => navigate('/')}
          />
          } />
      </Routes>
    </div>
  );
}

export default App;

