import { create } from "zustand";

const useContactBookStore = create((set) => ({
  contacts: [],

  addContact: (contact) =>
    set((state) => ({
      contacts: [...state.contacts, contact],
    })),

  deleteContact: (id) =>
    set((state) => ({
      contacts: state.contacts.filter((contact) => contact.id !== id),
    })),

  disableContact: (id) =>
    set((state) => ({
      contacts: state.contacts.map((contact) =>
        contact.id === id
          ? { ...contact, disabled: !contact.disabled }
          : contact,
      ),
    })),
}));

export default useContactBookStore;
