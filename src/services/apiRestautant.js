const API_URL = `https://react-fast-pizza-api.onrender.com/api`;

export const getMenu = async () => {
  const res = await fetch(`${API_URL}/menu`);
  if (!res.ok) throw new Error("Failed to get menu data");
  const { data } = await res.json();
  return data;
};
