import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { AppContainer, Title, FilterWrapper } from './AppStyled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addContact, deleteContact, setFilter } from './contactsSlice';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.contacts.filter);

  useEffect(() => {
    const savedContactsJSON = localStorage.getItem('contacts');
    if (savedContactsJSON) {
      try {
        const savedContacts = JSON.parse(savedContactsJSON);
        dispatch(addContact(savedContacts));
      } catch (error) {
        console.error('Error parsing contacts from localStorage:', error);
      }
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
    toast.success('Contact added');
  };

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
    toast.success('Contact deleted');
  };

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <AppContainer>
      <Title>Phonebook</Title>
      <ContactForm addContact={handleAddContact} contacts={contacts} />
      <h2>Contacts</h2>
      <FilterWrapper>
        <Filter filter={filter} handleFilterChange={handleFilterChange} />
      </FilterWrapper>
      <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
      <ToastContainer />
    </AppContainer>
  );
};

export default App;
