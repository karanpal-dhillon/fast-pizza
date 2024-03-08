const API_URL = `https://react-fast-pizza-api.onrender.com/api`;

export const getMenu = async () => {
  const res = await fetch(`${API_URL}/menu`);
  if (!res.ok) throw new Error("Failed to get menu data");
  const { data } = await res.json();
  return data;
};

export const getOrderById = async (id) => {
  const res = await fetch(`${API_URL}/order/${id}`);
  if (!res.ok) {
    console.log(await res.json());
    throw new Error(
      "Failed to get order data: underlying message is " + res.message,
    );
  }
  const { data } = await res.json();
  return data;
};

export const createOrder = async (order) => {
  const res = await fetch(`${API_URL}/order`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });
  if (!res.ok) {
    console.log(await res.json());
    throw new Error("Failed to create order");
  }
  const { data } = await res.json();
  return data;
};

export const updateOrder = async (id, updateObj) => {
  const res = await fetch(`${API_URL}/order/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(updateObj),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  if (!res.ok) {
    throw new Error("Failed to update your order")
  }
}
