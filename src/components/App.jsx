import ContactFormPage from './ContactForm/ContactForm';
import ContactListPage from './ContactsList/ContactsList';
import Filter from './ContactFilters/ContactFilters';
import { HeaderDiv, HeaderH1, HeaderH2 } from './AppNew.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const App = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const onInputChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <HeaderDiv>
      <HeaderH1>Phonebook</HeaderH1>
      <ContactFormPage />
      <HeaderH2>Contacts</HeaderH2>
      <Filter handleFilterChange={onInputChange} filter={filter} />
      <ContactListPage />
    </HeaderDiv>
  );
};
