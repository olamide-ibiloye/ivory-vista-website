import ContactUs from "@/components/contactUs/ContactUs";
import OtherHero from "@/components/hero/OtherHero";
import VisionMission from "@/components/visionMission/VisionMission";

export default function Home() {
  return (
    <main>
      <OtherHero />

      <VisionMission />

      <ContactUs />
    </main>
  );
}
