import Hero from "@/components/hero/Hero";
import AboutUs from "@/components/aboutUs/AboutUs";
import OurServices from "@/components/ourServices/OurServices";
import Projects from "@/components/projects/Projects";
import ContactUs from "@/components/contactUs/ContactUs";

export default function Home() {
  return (
    <main>
      <Hero />

      <AboutUs />

      <OurServices />

      <Projects />

      <ContactUs />
    </main>
  );
}
