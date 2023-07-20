import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  props: null,
  isOpen: false,
};

export const modalSelector = (state) => state.modal;

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      const { props } = action.payload;
      state.props = props;
      state.isOpen = true;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
