import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import {setColourFilter, setGenderFilter, setPriceFilter, setTypeFilter} from '../slices/filterSlice'

export default function Filters() {
  const products = useSelector((state) => state.products);
  const filters = useSelector(state=> state.filters)
  console.log({filters})
  const [value, setValue] = useState([0, 500]);
/**
 *   gender: "",
    color: "",
    priceRange: {
      min: "",
      max: ""
    },
    type: ""
 */
const dispatch = useDispatch()
  const minMax = products?.reduce(
    (acc, curr) => {
      if (curr.price < acc.min) {
        return { ...acc, min: curr.price };
      } else if (curr.price > acc.max) {
        return { ...acc, max: curr.price };
      } else return acc;
    },
    { min: 0, max: 0 }
  );
  console.log(minMax);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function getUniqueItems(prop) {
    return products?.reduce((acc, curr) => {
      if (!acc.includes(curr[prop])) return [...acc, curr[prop]];
      else return acc;
    }, []);
  }

  const allColours = getUniqueItems("color");
  const allGender = getUniqueItems("gender");
  const allTypes = getUniqueItems("type");
  console.log(allColours);
  return (
    <div className="pl-3 flex flex-col gap-1 ">
      <p className="flex flex-col items-start ">
        <h3 className="font-bold text-lg">Price</h3>
        <Box sx={{ width: 150 }}>
          <Slider
            max={minMax?.max}
            min={minMax?.min}
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
          <span className="mx-3 my-1 flex gap-2 "> Rs.{value[0]}-{value[1]}</span>
        </Box>
      </p>
      <p className="flex flex-col items-start ">
        <h3 className="font-bold text-lg">Colors</h3>
        {allColours?.map((item) => (
          <label key={item} className="mx-3 my-1 flex gap-2 ">
            <input type="checkbox" name={item} id="" onChange={(e)=>dispatch(setColourFilter(e.target.name))} />
            {item}
          </label>
        ))}
      </p>

      <p className="flex flex-col items-start ">
        <h3 className="font-bold text-lg">Genders</h3>
        {allGender?.map((item) => (
          <label className="mx-3 my-1 flex gap-2 " key={item}>
            <input type="checkbox" name="colors" id="" />
            {item}
          </label>
        ))}
      </p>
      <p className="flex flex-col items-start ">
        <h3 className="font-bold text-lg">Type</h3>
        {allTypes?.map((item) => (
          <label className="mx-3 my-1 flex gap-2 " key={item}>
            <input type="checkbox" name="colors" id="" />
            {item}
          </label>
        ))}
      </p>

    </div>
  );
}
function valuetext(value) {
  return `Rs. ${value}`;
}
