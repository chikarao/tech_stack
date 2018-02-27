import { combineReducers } from 'redux';
// allows multiple reducers to work together
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});

// getState returns []
