import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="grid lg:grid-cols-2 items-center justify-center text-left ">
        <div className="flex flex-col gap-5 items-start pl-3">
          <span className="italic text-slate-500">Magical colors</span>
          <p className="text-6xl font-bold">
            Dream Collection
          </p>
          <p>
         TeeRex Store is the ultimate destination for basic, hoodies and polo t-shirts. Whether you are looking for sports, Casual, or Party, we have it all at affordable prices and fast delivery.
          </p>
          <Button variant="contained" onClick={() => navigate("/browse")}>
            Browse Collection
          </Button>
        </div>
        <div className="p-1">
          <img className="sm: hidden md:block"
            src="https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/blue-polo-women.png"
            alt="collection of t-shirts"
          />
        </div>
      </div>
    </>
  );
}
