import CartItem from "./CartItem";
import Button from "../../ui/Button"
import LinkButton from "../../ui/LinkButton";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  }
]

const Cart = () => {
  const cart = fakeCart;
  return (
    <div className="py-3 px-4">
      <LinkButton to="/menu">
        &larr; Back to menu
      </LinkButton>
      <h2 className="mt-7 font-semibold text-xl">Your cart, %NAME%</h2>
      <ul className="divide-y divide-stone-200 border-b border-stone-200 mt-3">
        {
          cart.map((item) => <CartItem key={item.pizzaId} cartItem={item} />)
        }
      </ul>
      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">Order pizzas</Button>
        <Button type="secondary">Clear Cart</Button>
      </div>
    </div>
  );
};

export default Cart;
