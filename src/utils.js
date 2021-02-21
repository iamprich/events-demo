export const formatDate = (iso) => {
  let date = new Date(iso);
  let dateOptions = { weekday: "long", month: "short", day: "numeric" };

  return date.toLocaleDateString("en-US", dateOptions);
};

export const formatDuration = (start_iso, end_iso) => {
  let startDate = new Date(start_iso);
  let endDate = new Date(end_iso);
  let timeOptions = { hour: "2-digit", minute: "2-digit" };
  let startTime = startDate.toLocaleTimeString("en-US", timeOptions);
  let endTime = endDate.toLocaleTimeString("en-US", timeOptions);

  return `${startTime} – ${endTime}`;
};

export const formatPrice = (price, currency) => {
  let formatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency
  });

  return formatter.format(price);
};
