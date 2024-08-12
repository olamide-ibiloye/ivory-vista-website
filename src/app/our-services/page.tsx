import ContactUs from "@/components/contactUs/ContactUs";
import OtherHero from "@/components/hero/OtherHero";
import React from "react";
import Services from "@/components/services/Services";
import { Metadata } from "next";
import { client } from "@/utils/client";

export const metadata: Metadata = {
  title: "Ivory Vista Properties | Our Services page",
  description: "Welcome to the official Ivory Vista Properties website",
};

export const revalidate = 300;

const getContent = async () => {
  try {
    const CONTENT_QUERY = `
      *[_type == 'ourServices'][0] {
        our_services {
          "cards": cards[] {
          ...,
            "images": images[] {
                            alt_text,
                            image,
                            "lqip": image.asset->metadata.lqip 
                          }
          }
        },
        hero_section {
          ...,
          "images": images[] {
                      alt_text,
                      image,
                      "lqip": image.asset->metadata.lqip 
                    }
        }
      } `;

    return await client.fetch(CONTENT_QUERY);
  } catch (error) {
    console.error("Error fetching content:", error);
    throw error;
  }
};

const OurServices = async () => {
  const { our_services, hero_section } = await getContent();

  return (
    <main>
      <OtherHero data={hero_section} />

      <Services data={our_services} />

      <ContactUs />
    </main>
  );
};

export default OurServices;
