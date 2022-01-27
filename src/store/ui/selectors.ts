import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../index";

const selectSlice = (state: RootState) => state.ui;

export const selectIsSidebarOpen = createSelector(
  selectSlice,
  (state) => state.isSidebarOpen
);
