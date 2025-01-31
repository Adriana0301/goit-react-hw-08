import { createSlice } from "@reduxjs/toolkit";
import { deleteContact, fetchContacts, addContact } from "./operations.js";
import { logoutThunk } from "../auth/operations.js";

const initialState = {
  items: [],
  loading: false,
  error: null,
};
const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.loading = false;
        state.error = false;
      })
      .addCase(deleteContact.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        const exists = state.items.some(
          (contact) =>
            contact.name.toLowerCase() === action.payload.name.toLowerCase()
        );
        if (!exists) {
          state.items.push(action.payload);
        } else {
          alert("Contact with this name already exists!");
        }
        state.loading = false;
        state.error = false;
      })
      .addCase(addContact.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.items = [];
        state.loading = false;
        state.error = null;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
