import React from 'react';
import './App.css';


function Contacts({ contacts, onDelete, onEdit }) {
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
                <button onClick={() => onDelete(contact.id)}>Удалить</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Contacts;
