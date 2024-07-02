import { playfairDisplay } from "@/app/layout";
import React from "react";
import { Button } from "../ui/button";
import house1 from "../../../public/House 1.png";
import house2 from "../../../public/House 2.png";

const Hero = () => {
  return (
    <section>
      <div className="flex min-h-[700px] flex-col items-center justify-center md:flex-row">
        <div className="mt-10 hidden h-[350px] w-[70%] bg-orange-400 max-md:block md:h-[600px]"></div>

        <div className="text-center md:w-[70%] md:text-left">
          <h1
            className={`text-4xl font-semibold md:text-6xl ${playfairDisplay.className}`}
          >
            Welcome to Ivory Vista Properties
          </h1>

          <p className="py-6 md:max-w-[70%]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>

          <Button className="h-[50px] w-[200px]">See Projects</Button>
        </div>
        <div className="hidden h-[600px] w-[70%] bg-orange-400 md:block"></div>
      </div>
    </section>
  );
};

export default Hero;
