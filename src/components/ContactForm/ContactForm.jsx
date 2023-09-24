import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from 'redux/contacts/operations';
import { selectUserContacts } from 'redux/contacts/selectors';
import {
  ContactButton,
  FormWrapper,
  InputStyleContact,
  LabelWrapper,
} from './ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectUserContacts);
  const dispatch = useDispatch();

  const onChangeValue = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    )
      return alert(`Contact ${name} is already in the contact list`);
    dispatch(addContactThunk({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <>
      <FormWrapper onSubmit={handleSubmit}>
        <LabelWrapper>
          <span>Name</span>
          <InputStyleContact
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash, and spaces. For example: Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={onChangeValue}
          />
        </LabelWrapper>
        <LabelWrapper>
          <span>Number</span>
          <InputStyleContact
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={onChangeValue}
          />
        </LabelWrapper>

        <ContactButton type="submit">Add contact</ContactButton>
      </FormWrapper>
    </>
  );
};
