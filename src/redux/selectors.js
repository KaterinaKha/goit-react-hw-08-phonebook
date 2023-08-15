import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts;

export const selectFilter = state => state.filter.filter;

export const selectUser = state => state.auth.user;
export const selectToken = state => state.auth.token;
export const selectAuthentificated = state => state.auth.authentificated;
export const selectIsLoading = state => state.auth.isLoading;
export const selectError = state => state.auth.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  }
);
