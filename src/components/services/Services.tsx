import React from "react";
import MaxWidthWrapper from "../maxWidthWrapper/MaxWidthWrapper";
import StylishCard from "../card/StylishCard";

const services = [
  "Portfolio Management",
  "Joint Venture",
  "Refurbishment As A Service",
];

type DataType = {
  cards: { title: string; body: any[]; images: any[] }[];
};

interface ServicesProps {
  data: DataType;
}

const Services: React.FC<ServicesProps> = ({ data }) => {
  const { cards } = data;

  return (
    <section>
      <MaxWidthWrapper>
        <div className="ivory-section flex min-h-[600px] flex-col gap-5">
          {cards.map((service, idx: number) => (
            <StylishCard
              key={idx}
              title={service.title}
              image={service.images}
              body={service.body}
              left={idx % 2 !== 0}
            />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Services;
