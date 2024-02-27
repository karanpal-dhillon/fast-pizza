import { useLoaderData } from "react-router-dom";
import { getOrderById } from "../../services/apiRestautant";
import { calculateMinsLeft, formatCurrency } from "../../utils/helpers";

export async function loader({ params }) {
  const order = await getOrderById(params.id);
  return order;
}

const Order = () => {
  const order = useLoaderData();
  const { status, priority, priorityPrice, orderPrice, estimatedDelivery } =
    order;
  const deliveryIn = calculateMinsLeft(estimatedDelivery);
  return (
    <div>
      <div>
        <h2>Status</h2>
        <div>
          {priority && <span>Priority</span>}
          <span> {status} order</span>
        </div>
      </div>
      <div>
        <p>
          {deliveryIn > 0
            ? `Only ${calculateMinsLeft(estimatedDelivery)} minutes left 😄`
            : "Order shoud have arrived"}
        </p>
      </div>
      <div>
        <p>Pizza price {formatCurrency(orderPrice)}</p>
        {priority && <p>Priority price : {formatCurrency(priorityPrice)}</p>}
        <p>To pay on delivery : {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
};

export default Order;
