import React from "react";
import MaxWidthWrapper from "../maxWidthWrapper/MaxWidthWrapper";
import StylishCard from "../card/StylishCard";

const projects = ["Project 1", "Project 2", "Project 3"];

const MainProjects = () => {
  return (
    <section>
      {/* <MaxWidthWrapper>
        <div className="ivory-section flex min-h-[600px] flex-col gap-5">
          {projects.map((service: string, idx: number) => (
            <StylishCard key={idx} title={service} left={idx % 2 !== 0} />
          ))}
        </div>
      </MaxWidthWrapper> */}
    </section>
  );
};

export default MainProjects;
