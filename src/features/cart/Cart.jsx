import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";

const Cart = () => {
  return (
    <div>
      <LinkButton>
        &larr; Back to menu
      </LinkButton>
      <h2>Your cart, %NAME%</h2>
      <div>
        <Link to="/order/new">Order pizzas</Link>
        <button>Clear Cart</button>
      </div>
    </div>
  );
};

export default Cart;
