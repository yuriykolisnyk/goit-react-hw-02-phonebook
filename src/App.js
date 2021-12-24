import React, { Component } from 'react';
import Container from './components/Container';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

import toast, { Toaster } from 'react-hot-toast';

import './App.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '+38 067 459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '+38 067 443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '+38 067 645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '+38 067 227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
    const duplicateName = this.state.contacts.find(contact => contact.name === newContact.name);

    if (duplicateName) {
      toast.error(`${newContact.name} is already on contacts`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
    toast.success(`${newContact.name} successfully is already add to contacts`);
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <Container>
        <Toaster />
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList contacts={this.filterContacts()} onDeleteContact={this.deleteContact} />
      </Container>
    );
  }
}

export default App;
