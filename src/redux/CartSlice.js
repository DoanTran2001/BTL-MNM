import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import purchaseApi from 'api/purchase.api'

export const getCartPurchases = createAsyncThunk('cart/getCartPurchases', async (data, thunkAPI) => {
  try {
    const res = await purchaseApi.getCartPurchases()
    return res
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

const cart = createSlice({
  name: 'cart',
  initialState: {
    purchases: []
  },
  extraReducers: {
    [getCartPurchases.fulfilled]: (state, action) => {
      state.purchases = action.payload.data
    }
  }
})

const cartReducer = cart.reducer
export default cartReducer
