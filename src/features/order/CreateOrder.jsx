import { Form } from "react-router-dom";
import { redirect } from "react-router-dom";
import { createOrder } from "../../services/apiRestautant";
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
  return (
    <Form className="" method="POST">
      <h2>Ready to order? Lets go</h2>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" name="customer" type="text" />
      </div>
      <div>
        <label htmlFor="phone">Phone number</label>
        <input name="phone" type="text" />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input name="address" type="text" />
      </div>
      <div>
        <input id="priority" name="priority" type="checkbox" />
        <label htmlFor="priority">Want to give your order a priority?</label>
      </div>
      <input name="cart" type="hidden" value={JSON.stringify(fakeCart)} />
      <button>Order now</button>
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
