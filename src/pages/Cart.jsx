import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  deleteFromCart,
} from "../slices/cartSlice";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Cart Page</h1>
      <div className="w-1/2  m-auto">
        {cart.map((item) => (
          <div className="flex border justify-between p-2 gap-2">
            <img
              src={item?.product?.imageURL}
              alt="cart product"
              className="w-12  "
            ></img>
            <div className="flex flex-col items-start">
              <span>
                <b>{item?.product?.name}</b>
              </span>
              <span>
                <b>₹ {item?.product?.price}</b>
              </span>
            </div>
            <div className="flex gap-2 items-center  ">
              <span
                onClick={() =>{ if(item.quantity>=2)dispatch(decrement(item))}}
                className=" hover:cursor-pointer hover:bg-slate-300 w-8 rounded-2xl  text-xl px-2  py-1 pt-0 border"
              >
                -
              </span>
              {item.quantity}
              <span
                onClick={() => dispatch(increment(item))}
                className="hover:cursor-pointer  hover:bg-slate-300 w-8 rounded-2xl text-xl px-2 py-1 pt-0  border"
              >
                +
              </span>
            </div>
            <Button
              onClick={() => dispatch(deleteFromCart(item.product.id))}
              variant={"outlined"}
              size="small"
            >
              Delete
            </Button>
          </div>
        ))}
      </div>
      {}
    </>
  );
}
