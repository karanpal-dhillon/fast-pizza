import { Link } from "react-router-dom";

const CartOverview = () => {
  return (
    <div>
      <p>
        <span>23 pizzas</span>
        <span>$24.45</span>
      </p>
      <Link to="/cart">Open Cart &rarr;</Link>
    </div>
  );
};

export default CartOverview;
