import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { clearCart, getCart } from './cartSlice.js'
import EmptyCart from "./EmptyCart.jsx";
import Button from "../../ui/Button"
import LinkButton from "../../ui/LinkButton";

const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector(getCart);
  const { username } = useSelector(state => state.user)

  function handleClick() {
    dispatch(clearCart())
  }

  if (cart.length < 1) return <EmptyCart />

  return (
    <div className="py-3 px-4">
      <LinkButton to="/menu">
        &larr; Back to menu
      </LinkButton>
      <h2 className="mt-7 font-semibold text-xl">Your cart, {username}</h2>
      <ul className="divide-y divide-stone-200 border-b border-stone-200 mt-3">
        {
          cart.map((item) => <CartItem key={item.pizzaId} cartItem={item} />)
        }
      </ul>
      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">Order pizzas</Button>
        <Button type="secondary" onClick={handleClick}>Clear Cart</Button>
      </div>
    </div>
  );
};

export default Cart;
