
import ContactFormPage from './ContactForm/ContactForm';
import ContactListPage from './ContactsList/ContactsList';
import Filter from './ContactFilters/ContactFilters';
import { HeaderDiv, HeaderH1, HeaderH2 } from './AppNew.styled';


export const App = () => {


  return (
    <HeaderDiv>
      <HeaderH1>Phonebook</HeaderH1>
      <ContactFormPage />
      <HeaderH2>Contacts</HeaderH2>
      <Filter />
      <ContactListPage
      />
    </HeaderDiv>
  );
};