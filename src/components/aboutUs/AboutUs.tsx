import Image from "next/image";
import React from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import interior1 from "../../../public/Interior 1.jpg";
import interior2 from "../../../public/Interior 2.jpg";
import interior3 from "../../../public/Interior 3.jpg";
import interior4 from "../../../public/Interior 4.jpg";
import interior5 from "../../../public/Interior 5.jpg";
import Header from "../text/Header";
import MaxWidthWrapper from "../maxWidthWrapper/MaxWidthWrapper";
import { playfairDisplay } from "@/utils/utils";

const AboutUs = () => {
  return (
    <section>
      <MaxWidthWrapper>
        <div className="ivory-section">
          <Header title="About Us" />

          <p className="py-10 text-center lg:w-[90%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>

          <div className="my-5 flex w-full flex-col items-center justify-center gap-3 md:flex-row">
            <div className="h-full w-full md:w-[30%]">
              <Image
                src={interior1}
                alt=""
                className="h-[512px] w-full rounded-lg object-cover"
              />
            </div>

            <div className="flex h-full w-full flex-col items-center justify-center gap-3 md:w-[35%]">
              <div className="relative w-full">
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
                  <p
                    className={`${playfairDisplay.className} text-xl text-white`}
                  >
                    Read more
                  </p>

                  <div className="cursor-pointer rounded-full bg-primary p-5">
                    <ArrowRightIcon className="h-6 w-6 text-white" />
                  </div>
                </div>

                <div className="absolute inset-0 rounded-lg bg-[#0D0A0A] opacity-60" />

                <Image
                  src={interior2}
                  alt=""
                  className="h-[250px] w-full rounded-lg object-cover"
                />
              </div>

              <div className="w-full">
                <Image
                  src={interior3}
                  alt=""
                  className="h-[250px] w-full rounded-lg object-cover"
                />
              </div>
            </div>

            <div className="flex h-full w-full flex-col items-center justify-center gap-3 md:w-[35%]">
              <div className="w-full">
                <Image
                  src={interior4}
                  alt=""
                  className="h-[250px] w-full rounded-lg object-cover"
                />
              </div>
              <div className="w-full">
                <Image
                  src={interior5}
                  alt=""
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
