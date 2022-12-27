import { createAsyncThunk } from '@reduxjs/toolkit'
import categoryApi from 'api/category.api'
import productApi from 'api/product.api'

export const getCategories = createAsyncThunk('home/getCategories', async (data, thunkAPI) => {
  try {
    const res = await categoryApi.getCategories()
    return res
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

export const getProducts = createAsyncThunk('home/getProducts', async (data, thunkAPI) => {
  try {
    const res = await productApi.getProducts(data)
    return res
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})
