import React from "react";
import Header from "../text/Header";
import Image from "next/image";
import ContactForm from "../form/ContactForm";
import { client } from "@/utils/client";
import { getSlides } from "@/utils/utils";

export const revalidate = 300;

const getContent = async () => {
  try {
    const CONTENT_QUERY = `
      *[_type == 'contactDetail'][0] {
        contact_image
      }`;

    return await client.fetch(CONTENT_QUERY);
  } catch (error) {
    console.error("Error fetching content:", error);
    throw error;
  }
};

const ContactUs = async () => {
  const { contact_image } = await getContent();

  const slides = getSlides(contact_image.images);

  return (
    <section id="contact-form">
      <div className="ivory-section relative bg-foreground">
        <Image
          alt={slides[0].alt_text}
          src={slides[0].image}
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            opacity: "10%",
          }}
        />

        <Header title="Contact Us" classes="text-background" />

        <p className="z-50 py-10 text-center text-background lg:w-[90%]">
          Subscribe with email and loads of interesting news will be sent to you
          on a daily basis.
        </p>

        <ContactForm />
      </div>
    </section>
  );
};

export default ContactUs;
