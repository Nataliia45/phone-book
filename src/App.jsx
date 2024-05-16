import React, { useState } from 'react';
import './App.css';
import Contacts from './Contacts';
import ContactForm from './ContactForm';


function App() {
    const [contacts, setContacts] = useState([]);
    const [currentPage, setCurrentPage] = useState('contacts');
    const [currentContact, setCurrentContact] = useState(null);

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
        <button onClick={() => setCurrentPage('contacts')}>Список контактов</button>
        <button onClick={() => { setCurrentContact(null); setCurrentPage('add'); }}>Добавить контакт</button>
      </nav>
      {currentPage === 'contacts' && (
        <Contacts
          contacts={contacts}
          onDelete={deleteContact}
          onEdit={(contact) => { setCurrentContact(contact); setCurrentPage('edit'); }}
        />
      )}
      {(currentPage === 'add' || currentPage === 'edit') && (
        <ContactForm
          contact={currentContact}
          onSave={(contact) => {
            if (currentPage === 'edit') {
              updateContact(contact);
            } else {
              addContact(contact);
            }
            setCurrentPage('contacts');
          }}
          onCancel={() => setCurrentPage('contacts')}
        />
      )}
    </div>
  );
}

export default App;

