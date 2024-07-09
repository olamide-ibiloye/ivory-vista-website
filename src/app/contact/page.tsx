import ContactUs from "@/components/contactUs/ContactUs";
import OtherHero from "@/components/hero/OtherHero";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Ivory Vista Properties | Contact page",
  description: "Welcome to the official Ivory Vista Properties website",
};

const page = () => {
  return (
    <main>
      <OtherHero
        title="Contact"
        body="Welcome to your source for leasing and managing beautiful rental homes Indonesia"
        // images={[service1, service2, service3]}
      />

      <ContactUs />
    </main>
  );
};

export default page;
