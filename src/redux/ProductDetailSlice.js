import { createAsyncThunk } from '@reduxjs/toolkit'
import purchaseApi from 'api/purchase.api'

export const addToCart = createAsyncThunk('productDetail/addToCart', async (data, thunkAPI) => {
  try {
    const res = await purchaseApi.addToCart(data)
    return res
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})
