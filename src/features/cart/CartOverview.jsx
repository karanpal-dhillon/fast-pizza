import { Link } from "react-router-dom";

const CartOverview = () => {
  return (
    <div className="bg-stone-600 text-stone-200 uppercase">
      <p className="text-stone-300 font-bold">
        <span>23 pizzas</span>
        <span>$24.45</span>
      </p>
      <Link to="/cart">Open Cart &rarr;</Link>
    </div>
  );
};

export default CartOverview;
