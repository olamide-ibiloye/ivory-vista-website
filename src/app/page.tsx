import MaxWidthWrapper from "@/components/maxWidthWrapper/MaxWidthWrapper";
import Hero from "@/components/hero/Hero";
import AboutUs from "@/components/aboutUs/AboutUs";
import OurServices from "@/components/ourServices/OurServices";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    <main>
      <MaxWidthWrapper>
        <Hero />

        <AboutUs />

        <OurServices />

        <Projects />
      </MaxWidthWrapper>
    </main>
  );
}
