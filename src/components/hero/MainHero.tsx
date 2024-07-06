import { playfairDisplay } from "@/app/layout";
import React from "react";
import { Button } from "../ui/button";
import house1 from "../../../public/House 1.jpg";
import house2 from "../../../public/House 2.jpg";
import IvoryCarousel from "../carousel/IvoryCarousel";
import Image from "next/image";
import dots from "../../../public/dots.png";
import MaxWidthWrapper from "../maxWidthWrapper/MaxWidthWrapper";

const MainHero = () => {
  const slides = [house2, house1];

  return (
    <section className="relative">
      <div className="flex min-h-[800px] w-full flex-col items-center justify-center py-10 md:flex-row md:py-20">
        <div className="absolute bottom-5 left-10 z-10">
          <Image
            src={dots}
            alt="dot style"
            className="max-md:h-20 max-md:w-20"
          />
        </div>

        <div className="hidden max-md:block md:h-[600px] md:w-[50%]">
          <IvoryCarousel slides={slides} />
        </div>

        <div className="relative z-10 ml-auto mt-10 text-center md:left-[10%] md:mt-0 md:w-[75%] md:text-left 2xl:left-[30%]">
          <h1
            className={`text-5xl font-semibold md:text-7xl 2xl:max-w-[65%] ${playfairDisplay.className} shadow-3xl`}
          >
            Welcome to Ivory Vista Properties
          </h1>

          <p className="py-8 md:max-w-[70%] 2xl:max-w-[50%]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>

          <Button className="h-[50px] w-[200px]">See Projects</Button>
        </div>

        <div className="hidden max-w-[50%] md:block 2xl:max-w-[40%]">
          <IvoryCarousel slides={slides} />
        </div>
      </div>
    </section>
  );
};

export default MainHero;
