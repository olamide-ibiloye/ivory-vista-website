import MaxWidthWrapper from "@/components/maxWidthWrapper/MaxWidthWrapper";
import Hero from "@/components/hero/Hero";
import AboutUs from "@/components/aboutUs/AboutUs";
import OurServices from "@/components/ourServices/OurServices";

export default function Home() {
  return (
    <main>
      <MaxWidthWrapper>
        <Hero />

        <AboutUs />

        <OurServices />
      </MaxWidthWrapper>
    </main>
  );
}
