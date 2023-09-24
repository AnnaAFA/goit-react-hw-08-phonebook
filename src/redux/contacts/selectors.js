import { createSelector } from '@reduxjs/toolkit';

export const selectUserContacts = state => state.contacts.contacts;
export const selectContactsLoading = state => state.contacts.isLoading;
export const selectContactsError = state => state.contacts.error;
export const selectFilter = state => state.filter;

export const selectFilteredContacts = createSelector(
  [selectUserContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
