import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState, useEffect } from "react";
import useDebounce from "../customHooks/useDebounce";
import {
  setColourFilter,
  setGenderFilter,
  setPriceFilter,
  setTypeFilter,
} from "../slices/filterSlice";

export default function Filters() {
  const products = useSelector((state) => state.products);

  const [price, setPriceRange] = useState([0, 500]);
  const debounceValue = useDebounce(price, 500);

  const dispatch = useDispatch();
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

  const handleChange = (event, newValue) => {
    setPriceRange(newValue);
  };
  useEffect(() => {
    dispatch(setPriceFilter({ min: price[0], max: price[1] }));
  }, [debounceValue[0], debounceValue[1]]);

  function getUniqueItems(prop) {
    return products?.reduce((acc, curr) => {
      if (!acc.includes(curr[prop])) return [...acc, curr[prop]];
      else return acc;
    }, []);
  }

  const allColours = getUniqueItems("color");
  const allGender = getUniqueItems("gender");
  const allTypes = getUniqueItems("type");

  return (
    <div className="pl-3 flex flex-col gap-1">
      <p className="flex flex-col items-start ">
        <h3 className="font-bold text-lg">Price</h3>
        <Box sx={{ width: 150 }}>
          <Slider
            max={minMax?.max}
            min={minMax?.min}
            getAriaLabel={() => "Temperature range"}
            value={price}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
          <span className="mx-3 my-1 flex gap-2 ">
            {" "}
            Rs.{price[0]}-{price[1]}
          </span>
        </Box>
      </p>
      <p className="flex flex-col items-start ">
        <h3 className="font-bold text-lg">Colors</h3>
        {allColours?.map((item) => (
          <label key={item} className="mx-3 my-1 flex gap-2 ">
            <input
              type="checkbox"
              name={item}
              id=""
              onChange={(e) => dispatch(setColourFilter(e.target))}
            />
            {item}
          </label>
        ))}
      </p>

      <p className="flex flex-col items-start ">
        <h3 className="font-bold text-lg">Genders</h3>
        {allGender?.map((item) => (
          <label className="mx-3 my-1 flex gap-2 " key={item}>
            <input
              type="checkbox"
              name={item}
              id=""
              onChange={(e) => dispatch(setGenderFilter(e.target))}
            />
            {item}
          </label>
        ))}
      </p>
      <p className="flex flex-col items-start ">
        <h3 className="font-bold text-lg">Type</h3>
        {allTypes?.map((item) => (
          <label className="mx-3 my-1 flex gap-2 " key={item}>
            <input
              type="checkbox"
              name={item}
              id=""
              onChange={(e) => dispatch(setTypeFilter(e.target))}
            />
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
