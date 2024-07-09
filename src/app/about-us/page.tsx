import ContactUs from "@/components/contactUs/ContactUs";
import OtherHero from "@/components/hero/OtherHero";
import VisionMission from "@/components/visionMission/VisionMission";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ivory Vista Properties | About Us page",
  description: "Welcome to the official Ivory Vista Properties website",
};

export default function Home() {
  return (
    <main>
      <OtherHero />

      <VisionMission />

      <ContactUs />
    </main>
  );
}
