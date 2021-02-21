export const formatDate = (iso) => {
  let date = new Date(iso);
  let dateOptions = { weekday: "long", month: "short", day: "numeric" };

  return date.toLocaleDateString("en-US", dateOptions);
};

export const formatDuration = (startISO, endISO) => {
  let startDate = new Date(startISO);
  let endDate = new Date(endISO);
  let timeOptions = { hour: "2-digit", minute: "2-digit" };
  let startTime = startDate.toLocaleTimeString("en-US", timeOptions);
  let endTime = endDate.toLocaleTimeString("en-US", timeOptions);

  return `${startTime} – ${endTime}`;
};

export const formatPrice = (priceInCents, currency) => {
  let formatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency
  });

  let priceInDollars = priceInCents / 100;

  return formatter.format(priceInDollars);
};
