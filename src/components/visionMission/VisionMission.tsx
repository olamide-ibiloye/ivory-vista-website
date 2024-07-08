import React from "react";
import Header from "../text/Header";
import Image from "next/image";
import vision from "../../../public/Vision.jpg";
import MaxWidthWrapper from "../maxWidthWrapper/MaxWidthWrapper";
import { playfairDisplay } from "@/utils/utils";

const VisionMission = () => {
  const ServiceCard = ({ title, body }: { title: string; body: string }) => {
    return (
      <div className="rounded-lg bg-muted-foreground p-5 text-background dark:bg-foreground/90">
        <h3
          className={`mb-3 text-xl font-medium md:text-2xl ${playfairDisplay.className}`}
        >
          {title}
        </h3>

        <p>{body}</p>
      </div>
    );
  };

  return (
    <section>
      <MaxWidthWrapper>
        <div className="min-h-[700px] py-20">
          <Header
            title="Our Vision & Mission"
            classes="text-center md:text-left"
          />

          <div className="md;gap-5 flex flex-col items-center justify-center gap-10 py-10 md:flex-row">
            <div className="hidden max-md:block">
              <div className="h-[250px] w-[250px] rounded-full border-[5px] border-primary">
                <Image
                  src={vision}
                  alt=""
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col items-start justify-start gap-3 md:w-[50%]">
              <ServiceCard
                title="Vision"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                diam habitant massa in."
              />

              <ServiceCard
                title="Mission"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                diam habitant massa in."
              />
            </div>

            <div className="hidden items-center justify-center md:flex md:w-[50%]">
              <div className="h-[400px] w-[400px] rounded-full border-[20px] border-primary">
                <Image
                  src={vision}
                  alt=""
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default VisionMission;
