import { useDispatch, useSelector } from "react-redux"
import ProductsCard from '../components/ProductsCard'
import Filters from "../components/Filters"
export default function Products() {
  const products = useSelector(state => state.products)
  
  return <>
    <h1>Products Page</h1>
     <div className="flex ">
      <Filters/>
     <div className="flex flex-wrap gap-3 m-auto justify-center">
      {
        products?.map(item => <ProductsCard key={item.id} product={item} />)
      }
    </div>
     </div>
   

  </>
}