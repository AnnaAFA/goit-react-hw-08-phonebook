import { Loader } from 'components/Loader/Loader';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthenticated } from 'redux/auth/selectors';
import {
  addContactThunk,
  deleteContactThunk,
  requestContactsThunk,
} from 'redux/contacts/operations';
import {
  selectContactsError,
  selectContactsLoading,
  selectUserContacts,
} from 'redux/contacts/selectors';

const ContactsPage = () => {
  const authenticated = useSelector(selectAuthenticated);
  const contacts = useSelector(selectUserContacts);
  const isLoading = useSelector(selectContactsLoading);
  const error = useSelector(selectContactsError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!authenticated) return;

    dispatch(requestContactsThunk());
  }, [authenticated, dispatch]);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    const name = form.elements.contactName.value;
    const number = form.elements.contactNumber.value;

    if (contacts.some(contact => contact.name === name))
      return alert(`Contact ${name} is already in the contact list`);
    dispatch(addContactThunk({ name, number }));
    // console.log(finalUserData);
  };

  const handleDeleteContact = contactId => {
    // console.log(contactId);
    dispatch(deleteContactThunk(contactId));
  };

  const showContacts = Array.isArray(contacts) && contacts.length > 0;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Name:</p>
          <input name="contactName" type="text" required />
        </label>
        <label>
          <p>Number:</p>
          <input name="contactNumber" type="text" required />
        </label>
        <button type="submit">Add contact</button>
      </form>
      {isLoading && <Loader />}
      {error && <p>Oops, some error occurred... {error}</p>}
      <ul>
        {showContacts &&
          contacts.map(contact => {
            return (
              <li key={contact.id}>
                <h3>Name: {contact.name}</h3>
                <p>Number: {contact.number}</p>
                <button
                  onClick={() => handleDeleteContact(contact.id)}
                  type="button"
                  aria-label="Delete contact"
                >
                  &times;
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ContactsPage;
