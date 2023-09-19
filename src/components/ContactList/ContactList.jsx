import React from 'react';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'components/Redux/actions/contactsActions';
import { ContactListContainer } from './ContactList.styles';

const ContactList = () => {
  const contact = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.contacts.filter)
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()));

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactListContainer>
      <ul>
        {filteredContacts.map((contact) => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </ContactListContainer>
  );
};

export default ContactList;
