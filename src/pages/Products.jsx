import { useSelector } from "react-redux";
import Filters from "../components/Filters";
import ProductsCard from "../components/ProductsCard";
import Search from "../components/SearchComponent";

export default function Products() {
  const products = useSelector((state) => state.products);
  const filters = useSelector((state) => state.filters);

  const filteredData = applyFilters(products, filters);

  return (
    <>
      <div className="flex gap-4 min-w-[100vw] ">
        <Filters />
        <div className="flex-grow">
          <div className="flex justify-between px-2 items-center text-sm text-left">
            {filteredData?.length ?? "No"} products found
            <Search />
          </div>
         { filteredData.length > 0 && <div className="flex flex-wrap gap-3 m-auto justify-center">
            {filteredData.length &&
              filteredData?.map((item) => (
                <ProductsCard key={item.id} product={item} />
              ))}
          </div>}
          {
            filteredData.length === 0 && <p>Sorry , No Product found, try another filter</p>
          }
        </div>
      </div>
    </>
  );
}

function applyFilters(products, filters) {
  const typeFilteredData =
    filters.type.length > 0
      ? products.filter((item) =>
          filters.type.some((elem) => item.type === elem)
        )
      : products;
  const genderFilteredData =
    filters.gender.length > 0
      ? typeFilteredData.filter((item) =>
          filters.gender.some((elem) => item.gender === elem)
        )
      : typeFilteredData;
  const colorFilteredData =
    filters.color.length > 0
      ? genderFilteredData.filter((item) =>
          filters.color.some((elem) => item.color === elem)
        )
      : genderFilteredData;

  const priceFilteredData = colorFilteredData.filter(
    (item) =>
      item.price >= filters.priceRange.min &&
      item.price <= filters.priceRange.max
  );
  const searchedData =
    filters.search?.length > 0
      ? priceFilteredData.filter((item) => {
          const searchTerms = filters.search.split(" ");
          return searchTerms.every((term) =>
            Object.values(item).some((value) => {
              const stringedValue =
                typeof value === "number" ? value.toString() : value;
              return stringedValue.toLowerCase().includes(term);
            })
          );
        })
      : priceFilteredData;

  return searchedData;
}
