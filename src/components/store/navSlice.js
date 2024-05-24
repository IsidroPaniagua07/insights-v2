// navSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  openMenus: [], // Initially, no menus are open
};

const navSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    openMenu: (state, action) => {
      state.openMenus.push(action.payload);
    },
    closeMenu: (state, action) => {
      state.openMenus = state.openMenus.filter(menu => menu !== action.payload);
    },
    toggleMenu: (state, action) => {
      if (state.openMenus.includes(action.payload)) {
        state.openMenus = state.openMenus.filter(menu => menu !== action.payload);
      } else {
        state.openMenus.push(action.payload);
      }
    },
  },
});

export const { openMenu, closeMenu, toggleMenu } = navSlice.actions;
export default navSlice.reducer;
