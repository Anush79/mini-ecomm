import { Button } from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  deleteFromCart,
  clearCart
} from "../slices/cartSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const totalAmount = cart.reduce((acc, curr) => {
    return acc += curr.product.price * curr.quantity
  }, 0)
  const isCartEmpty = cart.length === 0

  return (
    <>
    <h1 className="text-4xl ">Your cart</h1>
{    isCartEmpty && 
    <div className="flex flex-col items-center">
    <span className="text-6xl">
      <InfoOutlinedIcon></InfoOutlinedIcon>
    </span>
    <span className="text-xxl">Cart is Empty </span>
    <Button variant="contained" size="large" onClick={()=>navigate('/browse')}>Shop Now</Button>
    </div>
    }
    
      
    {
     !isCartEmpty && <div className="flex flex-col gap-2  lg:w-1/2  m-auto">
        {cart.map((item) => (
          <div className="grid lg:grid-cols-4 justify-center grid-cols-2 items-center border p-2 gap-2">
            <img
              src={item?.product?.imageURL}
              alt="cart product"
              className="w-16  "
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
                onClick={() => { if (item.quantity >= 2) dispatch(decrement(item)) }}
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
        <h3 className="font-bold text-2xl"> Total Price : {totalAmount} </h3>
        <Button
          onClick={() => {
            toast.success('Thanks for the purchase.');
            dispatch(clearCart())
          }}
          variant={"contained"}

        >
          Complete Shopping
        </Button>
      </div>}
      { }
    </>
  );
}
