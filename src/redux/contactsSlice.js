import { createSelector, createSlice, nanoid } from "@reduxjs/toolkit";
import { deleteContact, fetchContacts, addContact } from "./contactsOps";
import { selectFilter } from "./filtersSlice";

const initialState = {
  items: [],
  loading: false,
  error: null,
};
const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    // addContact: (state, action) => {
    //   const exists = state.items.some(
    //     (contact) =>
    //       contact.name.toLowerCase() === action.payload.name.toLowerCase()
    //   );
    //   if (!exists) {
    //     state.items.push({
    //       id: nanoid(),
    //       name: action.payload.name,
    //       number: action.payload.number,
    //     });
    //   } else {
    //     alert("Contact with this name already exists!");
    //   }
    // },
    // deleteContact: (state, action) => {
    //   state.items = state.items.filter((item) => item.id !== action.payload);
    // },
  },
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
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
// export const { addContact } = contactsSlice.actions;
export const selectContacts = (state) => state.contacts.items;
export const selectError = (state) => state.contacts.error;
export const selectLoading = (state) => state.contacts.loading;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact?.name.toLowerCase().includes(filter?.toLowerCase() || "")
    );
  }
);
