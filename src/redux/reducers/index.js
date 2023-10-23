import { combineReducers } from 'redux';
import dataSlice from './productsSlice'; // Import your reducers

const rootReducer = combineReducers({
  products: dataSlice,
});

export default rootReducer;
