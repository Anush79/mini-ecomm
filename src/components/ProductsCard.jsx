import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../slices/cartSlice";

export default function ProductsCard({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const isItemPresentInCart = cart.find(
    (item) => item.product.id === product.id
  );
  const onClickHandler = () => {
    return isItemPresentInCart
      ? dispatch(deleteFromCart(product.id))
      : dispatch(addToCart(product));
  };
  return (
    <div className="flex flex-col justify-between max-w-[250px] p-3 rounded-lg  shadow-lg gap-3 hover:outline hover:cursor-pointer">
      <img src={product?.imageURL} alt="" srcset="" className="w-full" />
      <div className="font-bold text-left">{product?.name}</div>
      <div className="flex gap-2 justify-between items-center">
        <span>₹ {product?.price}</span>
        <Button onClick={onClickHandler} variant="outlined">
          {isItemPresentInCart ? ` Remove ` : `Add to Cart`}
        </Button>
      </div>
    </div>
  );
}
