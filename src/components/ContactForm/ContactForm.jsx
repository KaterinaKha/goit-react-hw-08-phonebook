import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    event.preventDefault();
    const form = event.target;

    const { name, number } = event.target.elements;
    const contValue = { name: name.value, number: number.value };

    contacts.some(({ name }) => name === contValue.name)
      ? alert(`${contValue.name} is already in contacts`)
      : dispatch(addContact(contValue));
    // dispatch(addContact());
    form.reset();
  };

  return (
    <Container style={{ marginTop: '20px' }}>
      <Card style={{ padding: '20px' }}>
        <Form onSubmit={handleChange}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              placeholder="Name"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              name="number"
              type="tel"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              placeholder="Number"
            />
          </Form.Group>

          <Button variant="info" type="submit">
            Add contact
          </Button>
        </Form>
      </Card>
    </Container>
  );
};
