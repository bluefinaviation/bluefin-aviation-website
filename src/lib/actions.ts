'use server'

import { revalidatePath } from 'next/cache'
import { MailService, MailDataRequired } from '@sendgrid/mail'

const API_KEY = process.env.SENDGRID_API_KEY
const MAIL_FROM = process.env.SENDGRID_MAILFROM
const MAIL_TO = process.env.SENDGRID_MAILTO
const MAILING_LIST_ID = process.env.SENDGRID_MAILING_ID

const sendgridClient = new MailService()
sendgridClient.setApiKey(API_KEY || '')

type ActionState = {
  success?: string
  error?: string
}

export async function sendRequestPlaneQuoteAction(
  state: ActionState,
  formData: FormData
) {
  try {
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const origin = formData.get('origin') as string
    const departure = formData.get('departure') as string
    const destination = formData.get('destination') as string
    const arrival = formData.get('arrival') as string
    const plane = formData.get('plane') as string
    const passengers = formData.get('passengers') as string
    const message = formData.get('message') as string

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
      return { error: 'All fields are required!' }
    }

    if (!MAIL_FROM || !MAIL_TO) {
      throw new Error('Email configuration is missing')
    }

    // Send email notification
    const msg: MailDataRequired = {
      to: { email: MAIL_FROM },
      from: { email: MAIL_TO },
      subject: `New Plane Quote Request from ${name}`,
      content: [
        {
          type: 'text/plain',
          value: `Email => ${email}`
        },
        {
          type: 'text/html',
          value: `
            <div>
              <ul>
                <li><strong>Name:</strong> ${name}</li>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>Origin:</strong> ${origin}</li>
                <li><strong>Departure:</strong> ${departure}</li>
                <li><strong>Destination:</strong> ${destination}</li>
                <li><strong>Arrival:</strong> ${arrival}</li>
                <li><strong>Plane:</strong> ${plane}</li>
                <li><strong>Passengers:</strong> ${passengers}</li>
              </ul>
              <p><strong>Message:</strong></p>
              <p>${message}</p>
            </div>
          `
        }
      ]
    }

    await sendgridClient.send(msg)

    // Add to mailing list
    const API_URL = 'https://api.sendgrid.com/v3/marketing/contacts'
    const API_OPTIONS = {
      method: 'PUT',
      body: JSON.stringify({
        contacts: [
          {
            first_name: name.split(' ')[0],
            last_name: name.split(' ').slice(1).join(' '),
            email: email,
            custom_fields: {
              origin: origin,
              destination: destination,
              plane: plane,
              passengers: passengers
            }
          }
        ],
        list_ids: [MAILING_LIST_ID]
      }),
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      }
    }

    await fetch(API_URL, API_OPTIONS)

    return { success: 'Message sent successfully!', error: undefined }
  } catch (error: unknown) {
    console.error('SendGrid Error:', error)
    return {
      error: (error as Error)?.message ?? 'An error occurred!'
    }
  } finally {
    revalidatePath('/services/charter')
  }
}

export async function sendContactMessageAction(
  state: ActionState,
  formData: FormData
) {
  try {
    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const company = formData.get('company') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const topic = formData.get('topic') as string
    const message = formData.get('message') as string

    if (
      !firstName ||
      !lastName ||
      !company ||
      !email ||
      !phone ||
      !topic ||
      !message
    ) {
      return { error: 'All fields are required!' }
    }

    if (!MAIL_FROM || !MAIL_TO) {
      throw new Error('Email configuration is missing')
    }

    const msg: MailDataRequired = {
      to: { email: MAIL_FROM },
      from: { email: MAIL_TO },
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      content: [
        {
          type: 'text/plain',
          value: `Email => ${email}`
        },
        {
          type: 'text/html',
          value: `
            <div>
              <ul>
                <li><strong>Name:</strong> ${firstName} ${lastName}</li>
                <li><strong>Company:</strong> ${company}</li>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>Phone:</strong> ${phone}</li>
                <li><strong>Topic:</strong> ${topic}</li>
              </ul>
              <p><strong>Message:</strong></p>
              <p>${message}</p>
            </div>
          `
        }
      ]
    }

    await sendgridClient.send(msg)
    return { success: 'Message sent successfully!', error: undefined }
  } catch (error: unknown) {
    console.error('SendGrid Error:', error)
    return {
      error:
        (error as Error)?.message ??
        'An error occurred while sending the message!'
    }
  } finally {
    revalidatePath('/')
  }
}

export async function subscribeToNewsletterAction(
  state: ActionState,
  formData: FormData
) {
  try {
    const email = formData.get('email') as string

    if (!email) {
      return { error: 'Email is required!' }
    }

    // Add to mailing list
    const API_URL = 'https://api.sendgrid.com/v3/marketing/contacts'
    const API_OPTIONS = {
      method: 'PUT',
      body: JSON.stringify({
        contacts: [
          {
            email: email
          }
        ],
        list_ids: [MAILING_LIST_ID]
      }),
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      }
    }

    const response = await fetch(API_URL, API_OPTIONS)

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Failed to subscribe to newsletter')
    }

    return { success: 'Thanks for subscribing!', error: undefined }
  } catch (error: unknown) {
    console.error('Newsletter Subscription Error:', error)
    return {
      error:
        (error as Error)?.message ??
        'An error occurred while subscribing to the newsletter!'
    }
  } finally {
    revalidatePath('/')
  }
}

export async function sendEmptyLegsRequestAction(
  state: ActionState,
  formData: FormData
) {
  try {
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const passengers = formData.get('passengers') as string
    const message = formData.get('message') as string
    const emptyLegId = formData.get('emptyLegId') as string
    const emptyLegRoute = formData.get('emptyLegRoute') as string
    const emptyLegDate = formData.get('emptyLegDate') as string
    const emptyLegPlane = formData.get('emptyLegPlane') as string

    if (!name || !email || !phone || !passengers || !message) {
      return { error: 'All fields are required!' }
    }

    if (!MAIL_FROM || !MAIL_TO) {
      throw new Error('Email configuration is missing')
    }

    // Send email notification
    const msg: MailDataRequired = {
      to: { email: MAIL_FROM },
      from: { email: MAIL_TO },
      subject: `New Empty Leg Request from ${name}`,
      content: [
        {
          type: 'text/plain',
          value: `Email => ${email}`
        },
        {
          type: 'text/html',
          value: `
            <div>
              <ul>
                <li><strong>Name:</strong> ${name}</li>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>Phone:</strong> ${phone}</li>
                <li><strong>Passengers:</strong> ${passengers}</li>
                <li><strong>Empty Leg Route:</strong> ${emptyLegRoute}</li>
                <li><strong>Empty Leg Date:</strong> ${emptyLegDate}</li>
                <li><strong>Empty Leg Plane:</strong> ${emptyLegPlane}</li>
              </ul>
              <p><strong>Message:</strong></p>
              <p>${message}</p>
            </div>
          `
        }
      ]
    }

    await sendgridClient.send(msg)

    // Add to mailing list
    const API_URL = 'https://api.sendgrid.com/v3/marketing/contacts'
    const API_OPTIONS = {
      method: 'PUT',
      body: JSON.stringify({
        contacts: [
          {
            first_name: name.split(' ')[0],
            last_name: name.split(' ').slice(1).join(' '),
            email: email,
            phone: phone,
            custom_fields: {
              passengers: passengers,
              empty_leg_id: emptyLegId
            }
          }
        ],
        list_ids: [MAILING_LIST_ID]
      }),
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      }
    }

    await fetch(API_URL, API_OPTIONS)

    return { success: 'Request sent successfully!', error: undefined }
  } catch (error: unknown) {
    console.error('SendGrid Error:', error)
    return {
      error: (error as Error)?.message ?? 'An error occurred!'
    }
  } finally {
    revalidatePath('/services/empty-legs')
  }
}
