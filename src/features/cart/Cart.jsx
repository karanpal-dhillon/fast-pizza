import Button from "../../ui/Button"
import LinkButton from "../../ui/LinkButton";

const Cart = () => {
  return (
    <div>
      <LinkButton to="/menu">
        &larr; Back to menu
      </LinkButton>
      <h2>Your cart, %NAME%</h2>
      <div>
        <Button to="/order/new">Order pizzas</Button>
        <Button>Clear Cart</Button>
      </div>
    </div>
  );
};

export default Cart;
