export const selectContacts = (state) => state.contacts;
export const selectContactsLoading = (state) => selectContacts(state).loading;
export const selectContactsItems = (state) => selectContacts(state).items;
export const selectContactsLoadingItem = (state, id) => {
  const items = selectContactsItems(state);
  return items.find((item) => item.id === Number(id));
};