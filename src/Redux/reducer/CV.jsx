import { createSlice } from "@reduxjs/toolkit";

export const CV = createSlice({
  name: "CV",
  initialState: {
    Cv:{
      fName: "",
          lName: "",
          profession: "",
          country: "",
          city: "",
          about:'',
          mobileNumber: "",
          email: "",
          Skills: [],
          Experiences:[],
          Education:[],
          Award:[],
          Hobbies:[],
          URL:[],

    }
  },
  reducers: {
    setCV: (state, action) => {
      state.Cv = { ...state.Cv , ...action.payload}
    }},
})

export const {
setCV,
} = CV.actions;

export default CV.reducer;
