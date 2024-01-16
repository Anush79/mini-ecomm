import { createSlice } from '@reduxjs/toolkit';


const reducerFunction = (prop) => {

  return (state, { payload }) => {
    if (payload.checked)
      state[prop] = [...state[prop], payload.name]
    else state[prop] = state[prop].filter(item => item !== payload.name)
  }
}

export const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    search:"",
    gender: [],
    color: [],
    priceRange: {
      min: "",
      max: ""
    },
    type: []
  },
  reducers: {
    setGenderFilter: reducerFunction('gender'),
    setColourFilter: reducerFunction('color'),
    setTypeFilter: reducerFunction('type'),
    setPriceFilter:(state, action)=>{
        state.priceRange = action.payload
    },
    setSearchFilter:(state, action)=>{
      state.search = action.payload.trim().toLowerCase();
    }
  }
})

export const { setColourFilter,setSearchFilter, setGenderFilter, setPriceFilter, setTypeFilter } = filterSlice.actions;

export default filterSlice.reducer;