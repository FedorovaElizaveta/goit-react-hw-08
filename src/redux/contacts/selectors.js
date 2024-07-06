import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter, selectNumberFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContactsByName = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, name) => {
    if (!name) {
      return contacts;
    }

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(name)
    );
  }
);

export const selectFilteredContactsByNumber = createSelector(
  [selectContacts, selectNumberFilter],
  (contacts, number) => {
    if (!number) {
      return contacts;
    }

    return contacts.filter((contact) =>
      contact.number.toLowerCase().includes(number)
    );
  }
);
