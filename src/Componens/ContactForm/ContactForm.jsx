import React from "react";

const ContactForm = ({ newContact, onInputChange, onAddContact }) => {
  return (
    <div className="contact-form">
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={newContact.firstName}
        onChange={onInputChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={newContact.lastName}
        onChange={onInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={newContact.email}
        onChange={onInputChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={newContact.phone}
        onChange={onInputChange}
      />
      <button className="add-button" onClick={onAddContact}>
        Add Contact
      </button>
    </div>
  );
};

export default ContactForm;
