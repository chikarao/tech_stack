export const selectLibrary = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId
  };
};
//obj with type property is action, wrapped by function,
// action creator
