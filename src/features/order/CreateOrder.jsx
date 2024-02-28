import { Form } from "react-router-dom";
import { redirect } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestautant";
import Button from "../../ui/Button";
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
  },
];
const CreateOrder = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting'
  return (
    // TODO error handling in the form
    <Form className="" method="POST">
      <h2>Ready to order? Lets go</h2>
      <div>
        <label htmlFor="firstName">First Name</label>
        <div>
          <input className="input" id="firstName" name="customer" placeholder="Enter your full name" type="text" />
        </div>
      </div>
      <div>
        <label htmlFor="phone">Phone number</label>
        <div>
          <input className="input" name="phone" type="text" />
        </div>
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <div>
          <input className="input" name="address" type="text" />
        </div>
      </div>
      <div>
        <input className="w-6 h-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-1" id="priority" name="priority" type="checkbox" />
        <label htmlFor="priority">Want to give your order a priority?</label>
      </div>
      <input name="cart" type="hidden" value={JSON.stringify(fakeCart)} />
      <Button disabled={isSubmitting}>
        {
          isSubmitting ? 'Placing Order' : 'Order now'
        }
      </Button>

    </Form>
  );
};

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    priority: data.priority === "on",
    cart: JSON.parse(data.cart),
  };
  const res = await createOrder(order);
  return redirect(`/order/${res.id}`);
}
export default CreateOrder;
