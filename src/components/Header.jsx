import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Header() {
const cart = useSelector(state=> state.cart)
console.log(cart)
  return <header className="flex justify-between items-center p-3 shadow min-h-[3rem]">
    <span  >
      TeeRex Store
    </span>
    
    <nav className="flex min-w-44 gap-3 ">

      <NavLink to={'/'}  ><span>Home</span></NavLink>
      <NavLink to={'/browse'} >Products</NavLink>
      <NavLink to={'/cart'} >Cart{`(${cart?.length})`}</NavLink>

    </nav>
  </header>
}