import { useLoaderData } from "react-router-dom";
import OrderItem from "./OrderItem";
import { getOrderById } from "../../services/apiRestautant";
import { calculateMinsLeft, formatCurrency, formatDate } from "../../utils/helpers";

export async function loader({ params }) {
  const order = await getOrderById(params.id);
  return order;
}

const Order = () => {
  const order = useLoaderData();
  const { id, status, priority, priorityPrice, orderPrice, estimatedDelivery, cart } =
    order;
  const deliveryIn = calculateMinsLeft(estimatedDelivery);
  return (
    <div className="px-4 py-6 space-y-8">
      <div className="flex  gap-2 items-center justify-between flex-wrap">
        <h2 className="text-xl font-semibold">Order# {id} Status</h2>
        <div className="space-x-2">
          {priority && <span className="bg-red-500 rounded-full px-3 py-1 text-sm font-semibold uppercase text-red-50 tracking-wide">Priority</span>}
          <span className="bg-green-500 rounded-full px-3 py-1 text-sm font-semibold uppercase text-green-50 tracking-wide"> {status} order</span>
        </div>
      </div>
      <div className="flex gap-2 items-center bg-stone-200 px-6 py-5 justify-between flex-wrap">
        <p className="font-medium">
          {deliveryIn > 0
            ? `Only ${calculateMinsLeft(estimatedDelivery)} minutes left 😄`
            : "Order shoud have arrived"}
        </p>
        <p className="text-xs text-stone-500">
          (Estimated Delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>
      <ul className="divide-y divide-stone-200 border-y">
        {
          cart.map((item) => <OrderItem key={item.id} item={item} />)
        }
      </ul>
      <div className="space-y-2 bg-stone-200 py-5 px-6">
        <p className="text-sm font-medium text-stone-600">Pizza price {formatCurrency(orderPrice)}</p>
        {priority && <p className="text-sm font-medium text-stone-600">Priority price : {formatCurrency(priorityPrice)}</p>}
        <p className="font-bold">To pay on delivery : {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
};

export default Order;
