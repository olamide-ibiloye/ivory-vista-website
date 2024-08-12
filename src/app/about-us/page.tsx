import WhoWeAre from "@/components/aboutUs/WhoWeAre";
import WhyChooseUs from "@/components/aboutUs/WhyChooseUs";
import ContactUs from "@/components/contactUs/ContactUs";
import OtherHero from "@/components/hero/OtherHero";
import VisionMission from "@/components/visionMission/VisionMission";
import { client } from "@/utils/client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ivory Vista Properties | About Us page",
  description: "Welcome to the official Ivory Vista Properties website",
};

export const revalidate = 300;

const getContent = async () => {
  try {
    const CONTENT_QUERY = `
      *[_type == 'aboutUs'][0] {
        ...,
        hero_section {
          ...,
          "images": images[] {
                      alt_text,
                      image,
                      "lqip": image.asset->metadata.lqip 
                    }
        },
        our_vision_mission {
          ...,
          "images": images[] {
                            alt_text,
                            image,
                            "lqip": image.asset->metadata.lqip 
                          }
        }
      }`;

    return await client.fetch(CONTENT_QUERY);
  } catch (error) {
    console.error("Error fetching content:", error);
    throw error;
  }
};

const AboutUs = async () => {
  const { hero_section, who_we_are, why_choose_us, our_vision_mission } =
    await getContent();

  return (
    <main>
      <OtherHero data={hero_section} />

      <VisionMission data={our_vision_mission} />

      <WhoWeAre data={who_we_are} />

      <WhyChooseUs data={why_choose_us} />

      <ContactUs />
    </main>
  );
};

export default AboutUs;
