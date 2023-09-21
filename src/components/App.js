import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Layout } from './Layout';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleAddContact = () => {
    const { name, number } = this.state;
    if (name.trim() === '' || number.trim() === '') {
      alert('Name and number cannot be empty');
      return;
    }

    if (this.isContactExists(name)) {
      alert(`${name} is already in contacts!`);
      return;
    }

    const newContact = { id: nanoid(), name, number };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));
  };

  handleNumberChange = event => {
    this.setState({ number: event.target.value });
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  isContactExists = name => {
    return this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };
  onDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { name, number, contacts } = this.state;

    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm
          name={name}
          number={number}
          onNameChange={this.handleNameChange}
          onNumberChange={this.handleNumberChange}
          onAddContact={this.handleAddContact}
        />
        <h2>Find contacts by name</h2>
        <input
          type="text"
          name="filter"
          value={this.state.filter}
          onChange={this.handleFilterChange}
          placeholder="Search contacts"
        />
        <h3>Contacts</h3>
        <ContactList
          contacts={this.filterContacts()}
          onDeleteContact={this.onDeleteContact}
        />
      </Layout>
    );
  }
}
