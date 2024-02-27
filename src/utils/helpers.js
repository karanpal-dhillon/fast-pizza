export const formatCurrency = (value) => {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};

export const formatDate = (dateStr) => {
  return Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateStr));
};

export function calculateMinsLeft(dateStr) {
  const now = new Date();
  const orderTime = new Date(dateStr);
  return Math.round((orderTime - now) / 60000);
}
