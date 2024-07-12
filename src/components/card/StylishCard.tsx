import Image from "next/image";
import React from "react";
import service1 from "../../../public/Service 1.jpg";
import { getSlides, playfairDisplay } from "@/utils/utils";
import IvoryPortableText from "../portableText/IvoryPortableText";

interface StylishCardProps {
  image: any[];
  title: string;
  body: any;
  left: boolean;
}

const StylishCard: React.FC<StylishCardProps> = ({
  image,
  title = "Portfolio Management",
  body = "Everything from marketing your property to moving in your tenant is all handled by our team. You set the requirements and we screen the tenants to find you the perfect match. No upfront fees.",
  left = false,
}) => {
  const slides = getSlides(image);

  return (
    <div className="my-10 w-full md:my-20">
      <div className={`relative ${left ? "flex justify-end" : ""}`}>
        <div
          className={`w-full bg-muted-foreground p-5 text-background dark:bg-foreground/90 md:w-[80%] md:p-0 ${left ? "flex flex-col items-end justify-end" : ""}`}
        >
          <div
            className={`absolute ${left ? "left-0 top-10" : "bottom-10 right-0"} z-10 hidden h-[450px] w-[450px] md:block`}
          >
            <Image
              src={slides[0].image}
              alt={slides[0].alt_text}
              width={1000}
              height={1000}
              quality={100}
              className="h-full w-full rounded-lg object-cover"
            />
          </div>

          <div
            className={`h-[350px] min-h-[350px] w-full md:hidden ${left ? "" : ""}`}
          >
            <Image
              src={slides[0].image}
              alt={slides[0].alt_text}
              width={1000}
              height={1000}
              className="h-full w-full rounded-lg object-cover"
            />
          </div>

          <div
            className={`flex h-full w-full flex-col items-start justify-start py-5 text-left md:min-h-[450px] md:w-[75%] md:justify-center md:p-10 lg:p-20`}
          >
            <h3
              className={`mb-5 w-full text-2xl font-medium md:text-4xl ${playfairDisplay.className}`}
            >
              {title}
            </h3>

            <IvoryPortableText content={body} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StylishCard;
