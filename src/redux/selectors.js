import { createSelector } from '@reduxjs/toolkit';

export const selectUser = state => state.auth.user;
export const selectToken = state => state.auth.token;
export const selectAuthentificated = state => state.auth.authentificated;
export const selectUserLoading = state => state.auth.isLoading;
export const selectUserError = state => state.auth.error;

export const selectContacts = state => state.contacts.contacts;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  }
);
