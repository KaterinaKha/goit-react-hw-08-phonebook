import css from './Contact.module.css';
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
    <ul className={css.contactList}>
      {filteredContacts.length > 0 &&
        filteredContacts.map(({ id, name, phone }) => (
          <li className={css.contactItem} key={id}>
            {name}: <span className={css.contactNumber}> {phone}</span>
            <button
              className={css.contactDeleteBtn}
              onClick={() => onDelContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};
