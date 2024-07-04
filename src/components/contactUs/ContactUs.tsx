import React from "react";
import Header from "../text/Header";
import Image from "next/image";
import form1 from "../../../public/Form 1.jpg";
import ContactForm from "../form/ContactForm";

const ContactUs = () => {
  return (
    <section>
      <div className="ivory-section relative bg-foreground">
        <Image
          alt=""
          src={form1}
          placeholder="blur"
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
