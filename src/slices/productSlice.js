import {createSlice} from '@reduxjs/toolkit';
import { products } from '../database/productsData';
export const productsSlice = createSlice({
  name : 'products',
  initialState:products,
  reducers:{

  }
})

export default productsSlice.reducer