
import {useState, useEffect} from 'react';

const useDebounce = (value, time)=>{
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(()=>{
const timeRef = setTimeout(()=>{setDebounceValue(value)}, time)
  return ()=>{
    clearTimeout(timeRef)
  }
},[value])
return debounceValue
}

export default useDebounce