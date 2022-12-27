import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authApi from 'api/auth.api'

export const register = createAsyncThunk('auth/register', async (data, thunkAPI) => {
  try {
    const res = await authApi.register(data)
    return res
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
  try {
    const res = await authApi.login(data)
    return res
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

export const logout = createAsyncThunk('auth/logout', async (data, thunkAPI) => {
  try {
    const res = await authApi.logout(data)
    return res
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

let initState = {
  // Nếu có user trong localStorage rồi thì sẽ lấy nó còn không thì lấy object rỗng
  profileTTN: JSON.parse(localStorage.getItem('userTTN')) || {}
}

const auth = createSlice({
  name: 'auth',
  initialState: initState,
  reducers: {
    unauthorize: (state) => {
      state.profileTTN = {}
      localStorage.removeItem('userTTN')
      localStorage.removeItem('accessTokenTTN')
    }
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      const { user, access_token } = action.payload.data
      state.profileTTN = user
      localStorage.setItem('userTTN', JSON.stringify(state.profileTTN))
      localStorage.setItem('accessTokenTTN', access_token)
    },
    [login.fulfilled]: (state, action) => {
      const { user, access_token } = action.payload.data
      state.profileTTN = user
      localStorage.setItem('userTTN', JSON.stringify(state.profileTTN))
      localStorage.setItem('accessTokenTTN', access_token)
    },
    [logout.fulfilled]: (state) => {
      state.profileTTN = {}
      localStorage.removeItem('userTTN')
      localStorage.removeItem('accessTokenTTN')
    }
  }
})

const authReducer = auth.reducer
export const unauthorize = auth.actions.unauthorize
export default authReducer
