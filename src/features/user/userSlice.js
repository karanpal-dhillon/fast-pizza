import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../../services/apiGeolocation";
const initialState = {
  username: '',
  status: 'idle',
  position: {},
  address: '',
  error: null
}

async function getPosition() {
  const position = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      resolve, reject
    )
  })
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  return { lat, lng };
}

export const fetchAddress = createAsyncThunk('user/fetchAddress', async function() {
  const position = await getPosition();
  const addressObj = await getAddress(position)
  const address = `${addressObj?.locality}, ${addressObj.city}, ${addressObj?.postcode}, ${addressObj.countryName}`
  return { position, address };
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser(state, action) {
      state.username = action.payload
    }
  },
  extraReducers: (builder) =>
    builder.addCase(fetchAddress.pending, (state, _action) => {
      state.status = 'loading'
    }).addCase(fetchAddress.fulfilled, (state, action) => {
      state.status = 'idle',
        state.address = action.payload.address
      state.position = action.payload.position
    }).addCase(fetchAddress.rejected, (state, action) => {
      state.status = 'error',
        state.error = action.error.message
    })

})

export const { updateUser } = userSlice.actions;
export default userSlice.reducer; 
