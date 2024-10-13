import React from "react";

const ContactList = ({ contacts, deleteContact, disableContact }) => {
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className={`contact-item ${contact.disabled ? "disabled" : ""}`}
        >
          <div>
            <strong>
              {contact.firstName} {contact.lastName}
            </strong>
            <br />
            <span>Email: {contact.email}</span>
            <br />
            <span>Phone: {contact.phone}</span>
          </div>
          <div className="contact-actions">
            <button onClick={() => deleteContact(contact.id)}>Delete</button>
            <button onClick={() => disableContact(contact.id)}>
              {contact.disabled ? "Enable" : "Disable"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
