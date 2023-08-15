import css from './ContactForm.module.css';
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
    const contValue = { name: name.value, phone: number.value };

    console.log('contValue: ', contValue.name);
    contacts.some(({ name }) => name === contValue.name)
      ? alert(`${contValue.name} is already in contacts`)
      : dispatch(addContact(contValue));
    // dispatch(addContact());
    form.reset();
  };

  return (
    <>
      <form className={css.contactForm} onSubmit={handleChange}>
        <label className={css.contactLabel}>
          Name
          <input
            className={css.contactInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.contactLabel}>
          Phone number
          <input
            className={css.contactInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.contactSubmitBtn} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};
