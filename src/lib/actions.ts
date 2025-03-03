"use server";

import { revalidatePath } from "next/cache";

type ActionState = {
  success?: string;
  error?: string;
};

export async function sendRequestPlaneQuoteAction(
  state: ActionState,
  formData: FormData
) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const origin = formData.get("origin") as string;
    const departure = formData.get("departure") as string;
    const destination = formData.get("destination") as string;
    const arrival = formData.get("arrival") as string;
    const plane = formData.get("plane") as string;
    const passengers = formData.get("passengers") as string;
    const message = formData.get("message") as string;

    if (
      !name ||
      !email ||
      !origin ||
      !destination ||
      !message ||
      !passengers ||
      !departure ||
      !plane ||
      !arrival
    ) {
      return { error: "All fields are required!" };
    }

    return { success: "Message sent successfully!", error: undefined };
  } catch (error: unknown) {
    return {
      error: (error as Error)?.message ?? "An error occurred!",
    };
  } finally {
    revalidatePath("/charter-brokerage");
  }
}

export async function sendContactMessageAction(
  state: ActionState,
  formData: FormData
) {
  try {
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const topic = formData.get("topic") as string;
    const message = formData.get("message") as string;

    if (!firstName || !lastName || !email || !phone || !topic || !message) {
      return { error: "All fields are required!" };
    }

    return { success: "Message sent successfully!", error: undefined };
  } catch (error: unknown) {
    return {
      error: (error as Error)?.message ?? "An error occurred!",
    };
  } finally {
    revalidatePath("/");
  }
}

export async function subscribeToNewsletterAction(
  state: ActionState,
  formData: FormData
) {
  try {
    const email = formData.get("email") as string;

    if (!email) {
      return { error: "Email is required!" };
    }

    // Here you would typically add code to subscribe the email to your newsletter service
    // For example, using a service like Mailchimp, ConvertKit, etc.

    return { success: "Thanks for subscribing!", error: undefined };
  } catch (error: unknown) {
    return {
      error: (error as Error)?.message ?? "An error occurred!",
    };
  } finally {
    revalidatePath("/");
  }
}
