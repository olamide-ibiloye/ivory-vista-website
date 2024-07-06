import ContactUs from "@/components/contactUs/ContactUs";
import OtherHero from "@/components/hero/OtherHero";
import MainProjects from "@/components/projects/MainProjects";
import React from "react";

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
