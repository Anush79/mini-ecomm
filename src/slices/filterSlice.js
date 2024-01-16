import { createSlice } from '@reduxjs/toolkit';


const reducerFunction = (prop) => {
  return (state, {payload}) => {
    if(payload)
    state[prop] = [state[prop],...payload]
  }
}

export const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    gender: "",
    color: "",
    priceRange: {
      min: "",
      max: ""
    },
    type: ""
  },
  reducers: {
    setGenderFilter:reducerFunction('gender'),
    setColourFilter:reducerFunction('color'),
    setPriceFilter:reducerFunction('priceRange'),
    setTypeFilter: reducerFunction('type')
  }
})

export const {setColourFilter, setGenderFilter, setPriceFilter, setTypeFilter} = filterSlice.actions;

export default filterSlice.reducer;