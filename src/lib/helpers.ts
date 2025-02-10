import { format } from "date-fns";

export const getFormattedTime = (dateTime: string) => {
  const date = new Date(dateTime);
  return format(date, "MMM dd, yyyy 'at' h:mm a");
};
