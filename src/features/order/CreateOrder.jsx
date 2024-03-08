import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Form } from "react-router-dom";
import { redirect } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestautant";
import store from '../../store'
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import EmptyCart from '../cart/EmptyCart'
import { fetchAddress } from "../user/userSlice";

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    priority: data.priority === "true",
    cart: JSON.parse(data.cart),
  };
  const res = await createOrder(order);
  store.dispatch(clearCart())
  return redirect(`/order/${res.id}`);
}

const CreateOrder = () => {
  const { username } = useSelector(state => state.user)
  const { status, address } = useSelector(state => state.user)
  const [priority, setPriority] = useState(false)

  const isLoading = status === 'loading'
  const dispatch = useDispatch();
  const cart = useSelector(getCart)
  const cartTotalPrice = useSelector(getTotalCartPrice)
  const priorityPrice = priority ? cartTotalPrice * 0.2 : 0;
  const totalPrice = cartTotalPrice + priorityPrice;

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting'
  if (cart.length === 0)
    return <EmptyCart />
  return (
    // TODO error handling in the form
    <div className="px-4 py-6">
      <h2 className="text-xl font-semibold mb-8">Ready to order? Lets go</h2>
      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40" htmlFor="firstName">First Name</label>
          <div className="grow">
            <input className="input" defaultValue={username} id="firstName" name="customer" placeholder="Enter your full name" type="text" />
          </div>
        </div>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40" htmlFor="phone">Phone number</label>
          <div className="grow">
            <input className="input" name="phone" type="text" />
          </div>
        </div>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center relative">
          <label className="sm:basis-40" htmlFor="address">Address</label>
          <div className="grow flex">
            <input className="input" defaultValue={address} name="address" type="text" />
          </div>
          <span className="absolute right-0.5 z-10">
            <Button type="small" onClick={(e) => { e.preventDefault(); dispatch(fetchAddress()) }}>
              {isLoading ? 'Loading' : 'Get address'}
            </Button>
          </span>
        </div>
        <div className="flex gap-2 items-center mb-8">
          <input className="w-6 h-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-1" id="priority" name="priority" type="checkbox" value={priority}
            onChange={() => setPriority(curr => !curr)} />
          <label htmlFor="priority">Want to give your order a priority?</label>
        </div>
        <input name="cart" type="hidden" value={JSON.stringify(cart)} />
        <Button disabled={isSubmitting} type="primary">
          {
            isSubmitting ? 'Placing Order' : `Order now for  ${formatCurrency(totalPrice)}`
          }
        </Button>
      </Form>
    </div>
  );
};

export default CreateOrder;
