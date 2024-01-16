import { Button } from "@mui/material";
import { increment, deleteFromCart, addToCart } from  '../slices/cartSlice';
import { useDispatch, useSelector } from "react-redux";

export default function ProductsCard({ product }) {
const dispatch = useDispatch();
const cart = useSelector(state=> state.cart)
const isItemPresentInCart = cart.find(item=> item.product.id === product.id)
const onClickHandler = ()=>{
  return isItemPresentInCart ? dispatch(deleteFromCart(product.id)) :dispatch(addToCart(product)) 
}
  return <div className="flex flex-col justify-between max-w-[250px] p-3 rounded-lg  shadow-lg gap-3 hover:outline hover:cursor-pointer">
    <img src={product?.imageURL} alt="" srcset="" className="w-full"/>
    <div className="flex gap-2 justify-between items-center">
      <span>₹ {product?.price}</span>
      <Button  onClick={onClickHandler} variant='outlined' >{isItemPresentInCart? ` Remove `:`Add to Cart`}</Button>
    </div>
  </div>
}

/** "id": 10,
  "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/red-round-women.png",
  "name": "Red Round",
  "type": "Basic",
  "price": 300,
  "currency": "INR",
  "color": "Red",
  "gender": "Women",
  "quantity": 2 */