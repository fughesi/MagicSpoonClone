import axios from "axios";
import jwtDecode from "jwt-decode";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  id: "",
  role: "",
  email: "",
  username: "",
  registerStatus: "",
  registerError: "",
  loginStatus: "",
  loginError: "",
  userLoaded: false,
};

export const registerUser = createAsyncThunk("auth/registerUser", async (values, { rejectWithValue }) => {
  try {
    //need to only have few items in token, not all items

    const token = await axios.post("http://localhost:5150/api/users/registration", {
      title: values.title,
      username: values.username,
      firstName: values.firstName,
      lastName: values.lastName,
      age: values.age,
      language: values.language,
      email: values.email,
      phoneNumber: values.phoneNumber,
      homeAddress: {
        number: values.number,
        street: values.street,
        city: values.city,
        state: values.state,
        zipCode: values.zipCode,
      },
      shippingAddress: {
        number: values.number,
        street: values.street,
        city: values.city,
        state: values.state,
        zipCode: values.zipCode,
      },
      password: values.password,
      confirmPassword: values.confirmPassword,
    });

    localStorage.setItem("token", token.data);

    return token.data;
  } catch (error) {
    console.log(error.response.data);
    return rejectWithValue(error.response.data);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, { payload }) => {
      return { ...state, registerStatus: "pending" };
    });
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      if (payload) {
        const user = jwtDecode(payload);

        return {
          ...state,
          token: payload, //need to fix, will return all reg instead of jwt
          title: user.title,
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          age: user.age,
          language: user.language,
          email: user.email,
          phoneNumber: user.phoneNumber,
          homeAddress: {
            number: user.number,
            street: user.street,
            city: user.city,
            state: user.state,
            zipCode: user.zipCode,
          },
          shippingAddress: {
            number: user.number,
            street: user.street,
            city: user.city,
            state: user.state,
            zipCode: user.zipCode,
          },
          password: user.password,
          confirmPassword: user.confirmPassword,

          registerStatus: "success",
        };
      } else {
        return state;
      }
    });
    builder.addCase(registerUser.rejected, (state, { payload }) => {
      return { ...state, registerStatus: "rejected", registerError: payload };
    });
  },
});

export default authSlice.reducer;
