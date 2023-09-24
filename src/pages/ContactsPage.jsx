import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthenticated } from 'redux/auth/selectors';
import { requestContactsThunk } from 'redux/contacts/operations';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectAuthenticated);

  useEffect(() => {
    dispatch(requestContactsThunk());
  }, [authenticated, dispatch]);

  return (
    <div>
      <ContactForm />
      <div>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};

export default ContactsPage;
