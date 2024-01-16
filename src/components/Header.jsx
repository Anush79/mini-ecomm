import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
export default function Header() {
  const cart = useSelector(state => state.cart)
  console.log(cart)
  return <header className="flex justify-between items-center p-3 shadow min-h-[3rem]">
    <span  >
      TeeRex Store
    </span>

    <nav className="flex min-w-44 gap-3 ">

      <NavLink to={'/'}  ><span>Home</span></NavLink>
      <NavLink to={'/browse'} >Products</NavLink>
      <NavLink to={'/cart'} >
        <Badge badgeContent={cart?.length} color="primary">
          <ShoppingCartOutlinedIcon />
        </Badge>
        {`(${cart?.length})`}</NavLink>

    </nav>
  </header>
}