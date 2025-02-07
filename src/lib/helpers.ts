export function getFormattedTime(
  dateString: string,
  isArrival = false,
  departureDateString?: string
) {
  const date = new Date(dateString);
  const today = new Date();
  const departureDate = departureDateString
    ? new Date(departureDateString)
    : null;

  const isToday = date.toDateString() === today.toDateString();
  const isSameDay =
    departureDate && date.toDateString() === departureDate.toDateString();

  const timeStr = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  if (isArrival && isSameDay) {
    return timeStr;
  }

  const dateStr = isToday
    ? "Today"
    : date.toLocaleDateString("en-US", { month: "short", day: "numeric" });

  return `${dateStr}, ${timeStr}`;
}

export function getFlightDuration(departureTime: string, arrivalTime: string) {
  const departure = new Date(departureTime);
  const arrival = new Date(arrivalTime);

  const durationMs = arrival.getTime() - departure.getTime();
  const hours = Math.floor(durationMs / (1000 * 60 * 60));
  const minutes = Math.round((durationMs % (1000 * 60 * 60)) / (1000 * 60));

  if (hours === 0) {
    return `${minutes}m`;
  }

  return minutes === 0 ? `${hours}h` : `${hours}h ${minutes}m`;
}
