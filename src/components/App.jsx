import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { AppContainer, Title, FilterWrapper } from './AppStyled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addContact } from './Redux/contactsSlice';

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

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <ToastContainer autoClose={3000} position={toast.POSITION.TOP_CENTER} />
    </div>
  );
};

export default App;
