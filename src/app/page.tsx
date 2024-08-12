import MainHero from "@/components/hero/MainHero";
import AboutUs from "@/components/aboutUs/AboutUs";
import OurServices from "@/components/ourServices/OurServices";
import Projects from "@/components/projects/Projects";
import ContactUs from "@/components/contactUs/ContactUs";
import { Metadata } from "next";
import { client } from "@/utils/client";

export const metadata: Metadata = {
  title: "Ivory Vista Properties | Homepage",
  description: "Welcome to the official Ivory Vista Properties website",
};

export const revalidate = 300;

const getContent = async () => {
  try {
    const CONTENT_QUERY = `
      {
        "home": *[_type == 'home'][0] {
          ...,
          hero_section {
            ...,
            "images": images[] {
                        alt_text,
                        image,
                        "lqip": image.asset->metadata.lqip 
                      }
          },
          about_us_section {
            ...,
            "images": images[] {
              alt_text,
              image,
              "lqip": image.asset->metadata.lqip 
            }
          },
          our_services_section {
            ...,
            "images": images[] {
                alt_text,
                image,
                "lqip": image.asset->metadata.lqip 
              }
          }
        },
        "services": *[_type == 'ourServices'][0] {
          our_services
        }
      }
    `;

    const { home, services } = await client.fetch(CONTENT_QUERY);

    if (!home || !services) {
      throw new Error("Data fetching error: 'home' or 'services' is missing.");
    }

    const updatedServices = {
      ...home.our_services_section,
      services: services.our_services,
    };

    return {
      ...home,
      our_services_section: updatedServices,
    };
  } catch (error) {
    console.error("Error fetching content:", error);
    throw error;
  }
};

const Home = async () => {
  const {
    hero_section,
    about_us_section,
    our_services_section,
    projects_section,
  } = await getContent();

  return (
    <main>
      <MainHero data={hero_section} />

      <AboutUs data={about_us_section} />

      <OurServices data={our_services_section} />

      {/* <Projects data={projects_section} /> */}

      <ContactUs />
    </main>
  );
};

export default Home;
