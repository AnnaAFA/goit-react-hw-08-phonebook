import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthenticated } from 'redux/auth/selectors';
import { requestContactsThunk } from 'redux/contacts/operations';
import { selectContactsLoading } from 'redux/contacts/selectors';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectAuthenticated);
  const isLoading = useSelector(selectContactsLoading);

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
      {isLoading && <Loader />}
    </div>
  );
};

export default ContactsPage;
