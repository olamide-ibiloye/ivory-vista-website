import React from "react";
import { Resend } from "resend";
import { NextResponse } from "next/server";
import ContactEmail from "@/components/templates/ContactEmail";

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  message: string;
}

const CONTACT_EMAIL = "contact@ivoryvista.com";
const SENDER = `"Ivory Vista Properties" <${CONTACT_EMAIL}>`;
const NOFICATION_RECIPIENT = "info@ivoryvista.com";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

const sendEmail = async (values: ContactFormData) => {
  try {
    const { firstName, lastName, email, phoneNumber, message } = values;

    const notificationMailOptions = {
      from: SENDER,
      to: NOFICATION_RECIPIENT,
      subject: "New Contact Form Submission",
      react: React.createElement(ContactEmail, {
        firstName,
        lastName,
        email,
        phoneNumber: phoneNumber,
        message,
      }),
    };

    const notificationData = await resend.emails.send(notificationMailOptions);

    return new NextResponse(JSON.stringify(notificationData));
  } catch (error) {
    return Response.json({ error });
  }
};

export { sendEmail };
