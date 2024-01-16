import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
export default function Header() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <header className="flex justify-between items-center p-3 shadow min-h-[3rem]">
      <span className="font-bold italic border-l">TeeRex Store</span>

      <nav className="flex min-w-44 gap-4 ">
        <NavLink to={"/"}>
          <span>Home</span>
        </NavLink>
        <NavLink to={"/browse"}>Products</NavLink>
        <NavLink to={"/cart"}>
          <Badge badgeContent={cart?.length} color="primary">
            <ShoppingCartOutlinedIcon />
          </Badge>
        </NavLink>
      </nav>
    </header>
  );
}
