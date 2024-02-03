export const selectLoading = state => state.auth.isLoggedIn;
export const selectAuthToken = state => state.auth.token;
export const selectUserName = state => state.auth.user.name;
export const selectFetchingCurrentUser = state =>
  state.auth.isFetchingCurrentUser;
