import { NextResponse } from 'next/server';

export async function PUT(request: Request) {
  const { firstName, lastName, email, company } = await request.json();

  if (!email) {
    return NextResponse.json(
      { error: 'An email is required!' },
      { status: 400 }
    );
  }

  try {
    const API_KEY = process.env.SENDGRID_API_KEY;

    const API_URL = 'https://api.sendgrid.com/v3/marketing/contacts';

    const API_LIST = process.env.SENDGRID_MAILING_ID;

    const API_OPTIONS = {
      method: 'PUT',
      body: JSON.stringify({
        contacts: [
          {
            first_name: firstName,
            last_name: lastName,
            email: email,
            company: company,
          },
        ],
        list_ids: [API_LIST],
      }),
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(API_URL, API_OPTIONS);

    if (response.status >= 400) {
      const message = await response.json();
      return NextResponse.json(
        { error: message.error.email[0] },
        { status: 400 }
      );
    }

    return NextResponse.json(response);
  } catch (err) {
    return NextResponse.json(
      { error: err.message || err.toString() },
      { status: 500 }
    );
  }
}
