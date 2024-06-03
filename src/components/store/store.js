import { configureStore } from '@reduxjs/toolkit';
import navReducer from './navSlice';
import patronReducer from './patronSlice';  // Import the patron reducer

const store = configureStore({
  reducer: {
    navigation: navReducer,
    patron: patronReducer,  // Add the patron reducer
  },
});

export default store;