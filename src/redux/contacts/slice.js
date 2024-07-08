import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
  state.isItemAdded = null;
  state.isItemDeleted = null;
};

const handleRejected = (state, { error }) => {
  state.loading = false;
  state.error = error.message;
  state.isItemAdded = null;
  state.isItemDeleted = null;
};

const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
    isItemAdded: null,
    isItemDeleted: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, handleRejected)

      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
        state.loading = false;
        state.isItemAdded = true;
      })
      .addCase(addContact.rejected, handleRejected)

      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter((item) => item.id !== payload.id);
        state.loading = false;
        state.isItemDeleted = true;
      })
      .addCase(deleteContact.rejected, handleRejected),
});

export const contactsReducer = contactSlice.reducer;
