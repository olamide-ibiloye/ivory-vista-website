import { playfairDisplay } from "@/app/layout";
import React from "react";
import { Button } from "../ui/button";
import house1 from "../../../public/House 1.jpg";
import house2 from "../../../public/House 2.jpg";
import IvoryCarousel from "../carousel/IvoryCarousel";
import MaxWidthWrapper from "../maxWidthWrapper/MaxWidthWrapper";

const Hero = () => {
  const slides = [house2, house1];

  return (
    <section>
      <MaxWidthWrapper>
        <div className="flex flex-col items-center justify-center py-10 md:flex-row md:py-20">
          <div className="hidden max-md:block md:h-[600px] md:w-[50%]">
            <IvoryCarousel slides={slides} />
          </div>

          <div className="relative z-50 -mt-10 text-center md:left-[10%] md:mt-0 md:text-left">
            <h1
              className={`text-5xl font-semibold md:text-7xl ${playfairDisplay.className} shadow-3xl`}
            >
              Welcome to Ivory Vista Properties
            </h1>

            <p className="py-8 md:max-w-[70%]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>

            <Button className="h-[50px] w-[200px]">See Projects</Button>
          </div>

          <div className="hidden min-w-[50%] md:block">
            <IvoryCarousel slides={slides} />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
