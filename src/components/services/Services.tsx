import React from "react";
import MaxWidthWrapper from "../maxWidthWrapper/MaxWidthWrapper";
import StylishCard from "../card/StylishCard";

const services = [
  "Portfolio Management",
  "Joint Venture",
  "Refurbishment As A Service",
];

const Services = () => {
  return (
    <section>
      <MaxWidthWrapper>
        <div className="ivory-section flex min-h-[600px] flex-col gap-5">
          {services.map((service: string, idx: number) => (
            <StylishCard key={idx} title={service} left={idx % 2 !== 0} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Services;
