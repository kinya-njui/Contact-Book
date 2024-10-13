import React, { useState } from "react";
import ContactForm from "./Componens/ContactForm/ContactForm";
import ContactList from "./Componens/ContactList/ContactList";
import ContactBookStore from "./Store/ContactBookStore";
import "./App.css";

const App = () => {
  const [newContact, setNewContact] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const { contacts, addContact, deleteContact, disableContact } =
    ContactBookStore();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContact({ ...newContact, [name]: value });
  };

  const handleAddContact = () => {
    if (
      newContact.firstName &&
      newContact.lastName &&
      newContact.email &&
      newContact.phone
    ) {
      addContact({ ...newContact, id: Date.now() });
      setNewContact({
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      });
    }
  };

  return (
    <div className="app-container">
      <h1>Contact Book</h1>
      <ContactForm
        newContact={newContact}
        onInputChange={handleInputChange}
        onAddContact={handleAddContact}
      />
      <ContactList
        contacts={contacts}
        deleteContact={deleteContact}
        disableContact={disableContact}
      />
    </div>
  );
};

export default App;
