import ContactUs from "@/components/contactUs/ContactUs";
import OtherHero from "@/components/hero/OtherHero";
import MainProjects from "@/components/projects/MainProjects";
import { client } from "@/utils/client";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Ivory Vista Properties | Projects page",
  description: "Welcome to the official Ivory Vista Properties website",
};

export const revalidate = 300;

const getContent = async () => {
  try {
    const CONTENT_QUERY = `
      *[_type == 'projects'][0] {
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

const Projects = async () => {
  const { hero_section } = await getContent();

  return (
    <main>
      <OtherHero data={hero_section} />

      {/* <MainProjects /> */}

      <ContactUs />
    </main>
  );
};

export default Projects;
