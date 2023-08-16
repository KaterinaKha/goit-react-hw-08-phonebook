import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const onDelContact = contId => {
    dispatch(deleteContact(contId));
  };

  return (
    <ListGroup>
      {filteredContacts.length > 0 &&
        filteredContacts.map(({ id, name, number }) => (
          <ListGroup.Item key={id}>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                {name}: {number}
              </div>
              <Button
                variant="info"
                size="sm"
                onClick={() => onDelContact(id)}
                className="ml-auto"
              >
                Delete
              </Button>
            </div>
          </ListGroup.Item>
        ))}
    </ListGroup>
  );
};
