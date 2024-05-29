import React, { useState } from 'react';
import './App.css';
import ConfirmModal from './ConfirmModal/ConfirmModal';


function Contacts({ contacts, onDelete, onEdit }) {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);

  const handleDelete = (contact) => {
    setContactToDelete(contact);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
      onDelete(contactToDelete.id);
      setIsModalOpen(false);
      setContactToDelete(null);
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  };

  const thTdStyle = {
    border: '1px solid #ddd',
    padding: '8px',
  };

  const thStyle = {
    backgroundColor: '#f2f2f2',
  };

  return (
    <div>
      <h2>Список контактов</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={{ ...thTdStyle, ...thStyle }}>Имя</th>
            <th style={{ ...thTdStyle, ...thStyle }}>Фамилия</th>
            <th style={{ ...thTdStyle, ...thStyle }}>Телефон</th>
            <th style={{ ...thTdStyle, ...thStyle }}>Действия</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id}>
              <td style={thTdStyle}>{contact.firstName}</td>
              <td style={thTdStyle}>{contact.lastName}</td>
              <td style={thTdStyle}>{contact.phone}</td>
              <td style={thTdStyle}>
                <button onClick={() => onEdit(contact)}>Редактировать</button>
                <button onClick={() => handleDelete(contact)}>Удалить</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ConfirmModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={confirmDelete}
            />

    </div>
  );
}

export default Contacts;
