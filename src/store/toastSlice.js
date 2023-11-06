import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  toasts: [],
};

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    addToast: (state, action) => {
      if (state.toasts.length === 3) {
        // Remove the oldest toast (the first one in the array)
        state.toasts.shift();
      }
      state.toasts.push(action.payload);
    },
    removeToast: (state, action) => {
      state.toasts = state.toasts.filter((toast) => {
        return toast.id !== action.payload;
      });
    },
  },
});

export const { addToast, removeToast } = toastSlice.actions;
export const selectToastState = (state) => state.toast;

export default toastSlice.reducer;
