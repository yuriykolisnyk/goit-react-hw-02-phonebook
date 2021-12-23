import React, { Component } from 'react';
import ContactForm from './components/ContactForm';
import './App.css';

class App extends Component {
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '+38 067 459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '+38 067 443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '+38 067 645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '+38 067 227-91-26' },
  //   ],
  //   filter: '',
  // };

  addContact = newContact => {
    console.log(newContact);
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
      </>
    );
  }
}

export default App;
