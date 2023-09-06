import { ListBtn, ListLi } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from 'redux/contactsSlice';

const ContactListPage = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filteredContacts = getFilteredContacts();

  return (
    <div>
      <ul>
        {filteredContacts.map(({ id, name, number }) => (
          <ListLi key={id}>
            {name}: {number}
            <ListBtn type="button" onClick={() => dispatch(remove(id))}>
              Delete contact
            </ListBtn>
          </ListLi>
        ))}
      </ul>
    </div>
  );
};

export default ContactListPage;
