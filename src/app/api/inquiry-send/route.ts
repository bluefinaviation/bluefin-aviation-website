import { MailService } from '@sendgrid/mail';
import { NextResponse } from 'next/server';

const API_KEY = process.env.SENDGRID_API_KEY;
const MAIL_FROM = process.env.SENDGRID_MAILFROM;
const MAIL_TO = process.env.SENDGRID_MAILTO;

const sendgridClient = new MailService();

sendgridClient.setApiKey(API_KEY || '');

export async function POST(request: Request) {
  const { firstName, lastName, email, company, service, message } =
    await request.json();

  if (!email || !message) {
    return NextResponse.json(
      { error: 'An email and a message are required!' },
      { status: 400 }
    );
  }

  const msg = {
    to: `${MAIL_FROM}`,
    from: `${MAIL_TO}`,
    subject: `New inquiry from ${firstName} ${lastName}`,
    text: `Email => ${email}`,
    html: `
    <div>
        <ul>
            <li>
                <strong>Name:</strong> ${firstName} ${lastName}
            </li>
            <li>
                <strong>Company:</strong> ${company}
            </li>
            <li>
                <strong>Email:</strong> ${email}
            </li>
            <li>
                <strong>Service:</strong> ${service}
            </li>    
        </ul>

        <p>${message}</p>
    </div>
    `,
  };

  try {
    await sendgridClient.send(msg);
    return NextResponse.json({ message: 'Email successfully sent!' });
  } catch (err) {
    return NextResponse.json({
      message: "An error occurred. The email couldn't be sent",
    });
  }
}
