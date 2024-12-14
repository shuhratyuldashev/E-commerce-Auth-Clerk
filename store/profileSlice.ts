import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profileModal: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    toggleModal(state) {
      state.profileModal = !state.profileModal;
    },
  },
});

export const { toggleModal } = profileSlice.actions;
export default profileSlice.reducer;
