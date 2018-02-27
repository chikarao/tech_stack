export default (state = null, action) => {

  switch (action.type) {
    case 'select_library':
      return action.payload;

    default:
      return state;
  }
};

// state default to null at boot up; no selected library
