import { Link } from "react-router-dom";

const CartOverview = () => {
  return (
    <div className="bg-stone-800 text-stone-200 uppercase p-4 sm:px-6 text-sm md:text-base flex justify-between items-center">
      <p className="text-stone-300 font-bold space-x-4 sm:space-x-6">
        <span>23 pizzas</span>
        <span>$24.45</span>
      </p>
      <Link to="/cart">Open Cart &rarr;</Link>
    </div>
  );
};

export default CartOverview;
