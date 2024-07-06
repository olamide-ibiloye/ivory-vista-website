import ContactUs from "@/components/contactUs/ContactUs";
import OtherHero from "@/components/hero/OtherHero";
import React from "react";
import service1 from "../../../public/Service 1.jpg";
import service2 from "../../../public/Service 2.jpg";
import service3 from "../../../public/Service 3.jpg";
import Services from "@/components/services/Services";

const page = () => {
  return (
    <main>
      <OtherHero
        title="Our Services"
        body="Welcome to your source for leasing and managing beautiful rental homes Indonesia"
        // images={[service1, service2, service3]}
      />

      <Services />

      <ContactUs />
    </main>
  );
};

export default page;
