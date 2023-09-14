import React from "react";
import { ContactListContainer } from "./ContactFormStyled";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactListContainer>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button className="delete-button" onClick={() => onDeleteContact(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </ContactListContainer>
  );
};


export default ContactList;
