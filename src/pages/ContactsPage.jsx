import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { FilterContacts } from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllContacts } from 'redux/operations';
import {
  selectAuthentificated,
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
      <Card style={{ padding: '20px' }}>
        <h1 className="text-center">Phonebook</h1>
        <ContactForm />
        <Container style={{ marginTop: '10px' }}>
          <Card style={{ padding: '20px' }}>
            <h2 className="text-center" style={{ marginBottom: '10px' }}>
              Contacts
            </h2>
            <FilterContacts />
            <ContactList />
          </Card>
        </Container>
      </Card>
    </div>
  );
};

export default ContactsPage;
