// import { addContact, deleteContact, fetchAllContacts } from '../operations';

// const { createSlice } = require('@reduxjs/toolkit');

// const contactsInitialState = {
//   contacts: [],
//   isLoading: false,
//   error: null,
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,

//   extraReducers: builder =>
//     builder
//       .addCase(fetchAllContacts.pending, state => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(fetchAllContacts.fulfilled, (state, action) => {
//         state.contacts = action.payload;
//         state.isLoading = false;
//       })
//       .addCase(fetchAllContacts.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })

//       .addCase(addContact.pending, state => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(addContact.fulfilled, (state, action) => {
//         state.contacts.push(action.payload);
//         state.isLoading = false;
//       })
//       .addCase(addContact.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })

//       .addCase(deleteContact.pending, state => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(deleteContact.fulfilled, (state, action) => {
//         state.contacts = state.contacts.filter(
//           contact => contact.id !== action.payload.id
//         );
//         state.isLoading = false;
//       })
//       .addCase(deleteContact.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       }),
// });

// export const contactsReducer = contactsSlice.reducer;
