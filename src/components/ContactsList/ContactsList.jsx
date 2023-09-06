import { ListBtn, ListLi } from './ContactList.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from 'redux/contactsSlice';

const ContactListPage = () => {

 const { contacts } = useSelector(state => state.contacts);

  const [filter] = useState('');

  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    dispatch(remove(contactId));
  };

    const getFilteredContacts = () => {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    };
    const filteredContacts = getFilteredContacts();

  return (
    <div>
      <ul>
        {filteredContacts.map(contact => (
          <ListLi key={contact.id}>
            {contact.name}: {contact.number}
            <ListBtn onClick={() => onDeleteContact(contact.id)}>
              Delete contact
            </ListBtn>
          </ListLi>
        ))}
      </ul>
    </div>
  );
};

export default ContactListPage;
