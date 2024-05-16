import React, { useState, useEffect } from 'react';

function ContactForm({ contact, onSave, onCancel }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (contact) {
      setFirstName(contact.firstName);
      setLastName(contact.lastName);
      setPhone(contact.phone);
    } else {
      setFirstName('');
      setLastName('');
      setPhone('');
    }
  }, [contact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: contact ? contact.id : Date.now(),
      firstName,
      lastName,
      phone
    };
    onSave(newContact);
  };

  return (
    <div>
      <h2>{contact ? 'Редактировать контакт' : 'Добавить контакт'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Имя</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        <div>
          <label>Фамилия</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </div>
        <div>
          <label>Телефон</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <button type="submit">Сохранить</button>
        <button type="button" onClick={onCancel}>Отмена</button>
      </form>
    </div>
  );
}

export default ContactForm;
