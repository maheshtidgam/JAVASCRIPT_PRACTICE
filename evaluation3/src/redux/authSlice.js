import { createSlice } from '@reduxjs/toolkit';
import { auth, googleProvider } from '../firebase';
import { signInWithEmailAndPassword, signOut, signInWithPopup } from "firebase/auth";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    role: 'user', // can be 'user' or 'admin'
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.role = 'user';
    },
  },
});

export const { setUser, setRole, logout } = authSlice.actions;

export const loginWithEmail = (email, password) => async (dispatch) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    dispatch(setUser(userCredential.user));
  } catch (error) {
    console.error("Login failed", error);
  }
};

export const loginWithGoogle = () => async (dispatch) => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    dispatch(setUser(result.user));
  } catch (error) {
    console.error("Google sign-in failed", error);
  }
};

export const logoutUser = () => async (dispatch) => {
  await signOut(auth);
  dispatch(logout());
};

export default authSlice.reducer;
