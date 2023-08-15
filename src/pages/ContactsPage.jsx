import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { FilterContacts } from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllContacts } from 'redux/operations';
import {
  selectAuthentificated,
  // selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/selectors';

const ContactsPage = () => {
  const authentificated = useSelector(selectAuthentificated);

  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!authentificated) return;

    dispatch(fetchAllContacts());
  }, [authentificated, dispatch]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>Oops, some error occured...</p>}
      {}
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <FilterContacts />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
