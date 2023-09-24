import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filterReducer';
import { selectFilter } from 'redux/contacts/selectors';
import {
  FilterForm,
  FilterTitle,
  InputStyleFilter,
  StyleSpan,
} from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onFilterChange = e => {
    const filterValue = e.target.value.toLowerCase();

    dispatch(setFilter(filterValue));
  };

  return (
    <>
      <FilterForm>
        <FilterTitle>
          <StyleSpan>Find contact by name</StyleSpan>
          <InputStyleFilter
            type="text"
            name="filter"
            value={filter}
            onChange={onFilterChange}
          />
        </FilterTitle>
      </FilterForm>
    </>
  );
};
