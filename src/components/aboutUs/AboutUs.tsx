import Image from "next/image";
import React from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Header from "../text/Header";
import MaxWidthWrapper from "../maxWidthWrapper/MaxWidthWrapper";
import { getSlides, playfairDisplay } from "@/utils/utils";
import { DataType } from "../hero/MainHero";
import Link from "next/link";

interface AboutUsProps {
  data: DataType;
}

const AboutUs: React.FC<AboutUsProps> = ({ data }) => {
  const { title, body, buttonName, images } = data;

  const slides = getSlides(images);

  return (
    <section>
      <MaxWidthWrapper>
        <div className="ivory-section">
          <Header title={title} />

          <p className="py-10 text-center lg:w-[90%]">{body}</p>

          <div className="my-5 flex w-full flex-col items-center justify-center gap-3 md:flex-row">
            <div className="h-full w-full md:w-[30%]">
              <Image
                src={slides[0].image}
                alt={slides[0].alt_text}
                height={1000}
                width={1000}
                className="h-[512px] w-full rounded-lg object-cover"
              />
            </div>

            <div className="flex h-full w-full flex-col items-center justify-center gap-3 md:w-[35%]">
              <div className="relative w-full">
                <Link href="/about-us">
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
                    <p
                      className={`${playfairDisplay.className} text-xl text-white`}
                    >
                      {buttonName}
                    </p>

                    <div className="cursor-pointer rounded-full bg-primary p-5">
                      <ArrowRightIcon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </Link>

                <div className="absolute inset-0 rounded-lg bg-[#0D0A0A] opacity-60" />

                <Image
                  src={slides[1].image}
                  alt={slides[1].alt_text}
                  height={1000}
                  width={1000}
                  className="h-[250px] w-full rounded-lg object-cover"
                />
              </div>

              <div className="w-full">
                <Image
                  src={slides[2].image}
                  alt={slides[2].alt_text}
                  height={1000}
                  width={1000}
                  className="h-[250px] w-full rounded-lg object-cover"
                />
              </div>
            </div>

            <div className="flex h-full w-full flex-col items-center justify-center gap-3 md:w-[35%]">
              <div className="w-full">
                <Image
                  src={slides[3].image}
                  alt={slides[3].alt_text}
                  height={1000}
                  width={1000}
                  className="h-[250px] w-full rounded-lg object-cover"
                />
              </div>
              <div className="w-full">
                <Image
                  src={slides[4].image}
                  alt={slides[4].alt_text}
                  height={1000}
                  width={1000}
                  className="h-[250px] w-full rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default AboutUs;
