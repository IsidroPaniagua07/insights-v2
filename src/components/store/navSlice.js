// navSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  openMenus: [], // Initially, no menus are open
  currentPath: {parent:null, child:null}, // Initially, the current URL is empty
};

const navSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    openMenu: (state, action) => {
      if (state.openMenus.includes(action.payload)) {
        return;
      }
      state.openMenus.push(action.payload);
    },
    closeMenu: (state, action) => {
      state.openMenus = state.openMenus.filter(menu => menu !== action.payload);
    },
    toggleMenu: (state, action) => {
      console.log('toggle')
      if (state.openMenus.includes(action.payload)) {
        state.openMenus = state.openMenus.filter(menu => menu !== action.payload);
      } else {
        state.openMenus.push(action.payload);
      }
    },
    updateCurrentPath: (state, action) => {
      state.currentPath = action.payload;
    },
  },
});

export const { openMenu, closeMenu, toggleMenu, updateCurrentPath } = navSlice.actions;
export default navSlice.reducer;
