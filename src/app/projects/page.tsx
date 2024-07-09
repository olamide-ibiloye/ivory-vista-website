import ContactUs from "@/components/contactUs/ContactUs";
import OtherHero from "@/components/hero/OtherHero";
import MainProjects from "@/components/projects/MainProjects";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Ivory Vista Properties | Projects page",
  description: "Welcome to the official Ivory Vista Properties website",
};

const page = () => {
  return (
    <main>
      <OtherHero
        title="Projects"
        body="Welcome to your source for leasing and managing beautiful rental homes Indonesia"
        // images={[service1, service2, service3]}
      />

      <MainProjects />

      <ContactUs />
    </main>
  );
};

export default page;
