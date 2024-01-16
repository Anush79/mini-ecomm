import {setSearchFilter} from '../slices/filterSlice'
import { useEffect, useState } from "react";
import { SearchOutlined } from "@mui/icons-material"
import useDebounce from '../customHooks/useDebounce';
import { useDispatch } from 'react-redux';

export default function Search (){
  const [inputVal, setInput] = useState("")
  const dispatch = useDispatch()
  const debouncedVal = useDebounce(inputVal, 500)
  useEffect(()=>{
    dispatch(setSearchFilter(debouncedVal))
  },[debouncedVal])

  return <>
              <span className="bg-[#F2F2F2] flex flex-row border-2 rounded my-2 w-[250px] gap-2 px-4 py-2">
              <SearchOutlined className="text-[#999999]" />
              <input
              onChange={(e)=>{setInput(e.target.value)}}
                type="text"
                placeholder="Search by name, color, type..."
                className="bg-[#F2F2F2] w-full outline-none"
              />
            </span>
  </>
}