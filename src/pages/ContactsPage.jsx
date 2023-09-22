import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthenticated } from 'redux/auth/selectors';
import { requestContactsThunk } from 'redux/contacts/operations';
// import {
//   selectContactsError,
//   selectContactsLoading,
//   selectUserContacts,
// } from 'redux/contacts/selectors';

const ContactsPage = () => {
  const authenticated = useSelector(selectAuthenticated);
  // const contacts = useSelector(selectUserContacts);
  // const isLoading = useSelector(selectContactsLoading);
  // const error = useSelector(selectContactsError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!authenticated) return;

    dispatch(requestContactsThunk());
  }, [authenticated, dispatch]);

  return <div>ContactsPage</div>;
};

export default ContactsPage;
