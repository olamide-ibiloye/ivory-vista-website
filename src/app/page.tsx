import MaxWidthWrapper from "@/components/maxWidthWrapper/MaxWidthWrapper";
import Hero from "@/components/hero/Hero";
import AboutUs from "@/components/aboutUs/AboutUs";

export default function Home() {
  return (
    <main>
      <MaxWidthWrapper>
        <Hero />

        <AboutUs />
      </MaxWidthWrapper>
    </main>
  );
}
