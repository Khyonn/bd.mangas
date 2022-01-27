import { createReducer } from "@reduxjs/toolkit";
import { closeSidebar, toggleSidebar } from "./actions";

const initialState = {
  isSidebarOpen: false,
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(toggleSidebar, (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    })
    .addCase(closeSidebar, (state) => {
      state.isSidebarOpen = false;
    });
});
