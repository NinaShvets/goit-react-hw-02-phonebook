import { Btn, Form, Input } from './ContactForm.styled';

export const ContactForm = ({
  name,
  number,
  onNameChange,
  onNumberChange,
  onAddContact,
}) => {
  return (
    <Form>
      <Input
        type="text"
        name="name"
        value={name}
        onChange={onNameChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Input
        type="tel"
        name="number"
        value={number}
        onChange={onNumberChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <Btn type="button" onClick={onAddContact}>
        Add contact
      </Btn>
    </Form>
  );
};
