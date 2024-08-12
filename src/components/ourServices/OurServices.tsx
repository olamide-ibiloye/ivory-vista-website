import React from "react";
import Header from "../text/Header";
import Image from "next/image";
import MaxWidthWrapper from "../maxWidthWrapper/MaxWidthWrapper";
import { getSlides, playfairDisplay } from "@/utils/utils";
import IvoryPortableText from "../portableText/IvoryPortableText";

type DataType = {
  title: string;
  services: any;
  images: any[];
};

interface OurServicesProps {
  data: DataType;
}

const OurServices: React.FC<OurServicesProps> = ({ data }) => {
  const { title, services, images } = data;

  const slides = getSlides(images);

  const ServiceCard = ({ title, body }: { title: string; body: any }) => {
    return (
      <div className="w-full rounded-lg bg-muted-foreground p-5 text-background dark:bg-foreground/90 md:w-[600px]">
        <h3
          className={`mb-3 text-xl font-medium md:text-2xl ${playfairDisplay.className}`}
        >
          {title}
        </h3>

        <IvoryPortableText content={body} />
      </div>
    );
  };

  return (
    <section>
      <MaxWidthWrapper>
        <div className="min-h-[500px] py-10">
          <Header title={title} classes="text-center lg:text-left" />

          <div className="flex flex-col items-center justify-center gap-10 py-10 md:gap-5 lg:flex-row">
            <div className="hidden h-[250px] w-[250px] max-lg:block">
              <Image
                src={slides[0].image}
                alt={slides[0].alt_text}
                blurDataURL={slides[0].lqip}
                placeholder="blur"
                width={1000}
                height={1000}
                className="rounded-full"
              />
            </div>

            <div className="flex flex-col items-center justify-start gap-3 md:w-[50%]">
              {services.cards
                .slice(0, 3)
                .map((service: { title: string; body: any }, idx: any) => (
                  <ServiceCard
                    key={`service-${idx}`}
                    title={service.title}
                    body={service.body}
                  />
                ))}
            </div>

            <div className="hidden items-center justify-center lg:flex lg:w-[50%]">
              <div className="h-[350px] w-[350px]">
                <Image
                  src={slides[0].image}
                  alt={slides[0].alt_text}
                  width={1000}
                  height={1000}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default OurServices;
