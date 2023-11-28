import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: " ",
  images: " ",
  nom: " ",
  prenom: " ",
  telephone: " ",
  _id: " "
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginRedux: (state, action) => {
      console.log(action.payload.data);
      const { _id, email, nom, prenom, telephone, images } = action.payload.data;
      state._id = _id;
      state.email = email;
      state.nom = nom;
      state.prenom = prenom;
      state.telephone = telephone;
      state.images = images;
    },
    LogoutRedux: (state, action) => {
      console.log(action.payload.data);
      const resetState = { ...initialState };
      Object.assign(state, resetState);
    }
  },
})

export const { loginRedux, LogoutRedux } = UserSlice.actions;

export default UserSlice.reducer;
