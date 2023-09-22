import { Btn, Form, Input } from './ContactForm.styled';
import { Component } from 'react';
export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleNumberChange = event => {
    this.setState({ number: event.target.value });
  };

  render() {
    const { name, number } = this.state;
    const { onAddContact } = this.props;

    return (
      <Form>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={this.handleNameChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={this.handleNumberChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <Btn type="button" onClick={() => onAddContact(name, number)}>
          Add contact
        </Btn>
      </Form>
    );
  }
}
