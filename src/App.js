import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="button">Add contact</button>
          <h2>Contacts</h2>
        </div>
      </>
    );
  }
}

export default App;
