import { createSlice } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';

const initialState = {
  modalType: null,
  props: null,
  playlistId: null,
  isOpen: false,
};
export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, actions) => {
      const { type, props, playlistId } = actions.payload;
      if (playlistId) {
        state.playlistId = playlistId;
      }
      state.modalType = type;
      state.props = props;
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal, playlistModal } = modalSlice.actions;
export const selectModal = (state) => state.modal;
export default modalSlice.reducer;
