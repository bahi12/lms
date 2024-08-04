import { createSelector } from '@reduxjs/toolkit';

const selectNavBarData = createSelector(
  (state) => state.isLoggedIn,
  (state) => state.user,
  (isLoggedIn, user) => ({
    isLoggedIn,
    user
  })
);

export default selectNavBarData;