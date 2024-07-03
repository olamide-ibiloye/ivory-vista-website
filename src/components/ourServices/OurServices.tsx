import React from "react";
import Header from "../text/Header";
import { playfairDisplay } from "@/app/layout";
import Image from "next/image";
import service1 from "../../../public/Service 1.jpg";

const OurServices = () => {
  const ServiceCard = ({ title, body }: { title: string; body: string }) => {
    return (
      <div className="rounded-lg bg-foreground p-5 text-background">
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
      <div className="min-h-[500px] py-10">
        <Header title="Our Services" classes="text-center md:text-left" />

        <div className="md;gap-5 flex flex-col items-center justify-center gap-10 py-10 md:flex-row">
          <div className="hidden max-md:block">
            <Image
              src={service1}
              alt=""
              width={250}
              height={250}
              className="rounded-full"
            />
          </div>

          <div className="flex flex-col items-start justify-start gap-3 md:w-[50%]">
            <ServiceCard
              title="Portfolio Management"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                diam habitant massa in."
            />

            <ServiceCard
              title="Joint Venture"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                diam habitant massa in."
            />

            <ServiceCard
              title="Refurbishment As A Service"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                diam habitant massa in."
            />
          </div>

          <div className="hidden items-center justify-center md:flex md:w-[50%]">
            <Image
              src={service1}
              alt=""
              width={350}
              height={350}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
