import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface ContactEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  message: string;
}

const ContactEmail: React.FC<ContactEmailProps> = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  message,
}) => {
  return (
    <Html>
      <Head />
      <Preview>New Enquiry from the Contact Form</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="my-10 rounded-md bg-white px-10 py-4">
              <Heading className="leading-tight">
                You received the following message from the contact form
              </Heading>

              <Text>{message}</Text>

              <Hr />

              <Text>The sender is: {`${firstName} ${lastName}`}</Text>

              <Text>The sender&apos;s email is: {email}</Text>

              {phoneNumber && (
                <Text>The sender&apos;s phone number is: {phoneNumber}</Text>
              )}
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactEmail;
