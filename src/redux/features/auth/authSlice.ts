import { createSlice } from "@reduxjs/toolkit";


const AuthState = {
  id: null,
  firstName: null,
  lastName: null,
  email: null,
  isAuth: false,
  roles:[]
};

const authSlice = createSlice({
  name: "auth",
  initialState: AuthState,
  reducers: {
    setlogin: (state, action) => {
      state.id = action.payload?.user?.id;
      state.firstName = action.payload?.user?.firstName;
      state.lastName = action.payload?.user?.lastName;
      state.email = action.payload?.user?.email;
      state.isAuth = true
      state.roles = action.payload?.user?.roles;

      if (action.payload?.user?.id) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            user: {
              id: action.payload?.user?.id,
              firstName: action.payload?.user?.firstName,
              lastName: action.payload?.user?.lastName,
              email: action.payload?.user?.email,
              isAuth: true,
              roles : action.payload?.user?.roles
            },
          })
        );
      }
    },
    logout: () => {
      localStorage.removeItem("user");
      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");
    }
  },
});

export const { setlogin, logout } = authSlice.actions;

export default authSlice.reducer;
