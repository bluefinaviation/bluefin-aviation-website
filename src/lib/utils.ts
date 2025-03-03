import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getFormattedTime = (dateTime: string) => {
  return dayjs(dateTime).format("MMM DD, YYYY 'at' h:mm A");
};

export const formatFlightTimes = (
  departureTime: string,
  arrivalTime: string
) => {
  const departure = dayjs(departureTime);
  const arrival = dayjs(arrivalTime);

  const dayFormat = "ddd DD MMM YYYY";
  const timeFormat = "h:mm A";

  const durationMinutes = arrival.diff(departure, "minute");
  const hours = Math.floor(durationMinutes / 60);
  const minutes = durationMinutes % 60;
  const duration = `${hours}h ${minutes}m`;

  if (departure.format("YYYY-MM-DD") === arrival.format("YYYY-MM-DD")) {
    return {
      date: departure.format(dayFormat),
      departureTime: departure.format(timeFormat),
      arrivalTime: arrival.format(timeFormat),
      duration,
    };
  }

  return {
    departureDate: departure.format(dayFormat),
    departureTime: departure.format(timeFormat),
    arrivalDate: arrival.format(dayFormat),
    arrivalTime: arrival.format(timeFormat),
    duration,
  };
};

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}
