import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format, differenceInMinutes, isSameDay } from "date-fns";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getFormattedTime = (dateTime: string) => {
  const date = new Date(dateTime);
  return format(date, "MMM dd, yyyy 'at' h:mm a");
};

export const formatFlightTimes = (
  departureTime: string,
  arrivalTime: string
) => {
  const departure = new Date(departureTime);
  const arrival = new Date(arrivalTime);

  const dayFormat = "EEE dd MMM yyyy";
  const timeFormat = "h:mm a";

  const durationMinutes = differenceInMinutes(arrival, departure);
  const hours = Math.floor(durationMinutes / 60);
  const minutes = durationMinutes % 60;
  const duration = `${hours}h ${minutes}m`;

  if (isSameDay(departure, arrival)) {
    return {
      date: format(departure, dayFormat),
      departureTime: format(departure, timeFormat),
      arrivalTime: format(arrival, timeFormat),
      duration,
    };
  }

  return {
    departureDate: format(departure, dayFormat),
    departureTime: format(departure, timeFormat),
    arrivalDate: format(arrival, dayFormat),
    arrivalTime: format(arrival, timeFormat),
    duration,
  };
};

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}
