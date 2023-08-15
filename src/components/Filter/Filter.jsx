import css from './Filter.module.css';
import { useDispatch } from 'react-redux';

import { setFilter } from 'redux/slices/filterSlice';

export const FilterContacts = () => {
  const dispatch = useDispatch();

  const onChangeFilter = event => {
    dispatch(setFilter(event.target.value));
  };
  return (
    <div className={css.filterContainer}>
      <p className={css.filterTitle}>Find contacts by name</p>
      <input
        className={css.filterInput}
        type="text"
        name="filter"
        placeholder="Enter contact name"
        onChange={onChangeFilter}
      />
    </div>
  );
};
