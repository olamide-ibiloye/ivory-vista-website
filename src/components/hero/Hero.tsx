import { playfairDisplay } from "@/app/layout";
import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section>
      <div className="flex min-h-[700px] items-center justify-center">
        <div className="">
          <h1 className={`text-6xl font-semibold ${playfairDisplay.className}`}>
            Welcome to Ivory Vista Properties
          </h1>

          <p className="py-6 md:max-w-[70%]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>

          <Button className="h-[50px] w-[200px]">See Projects</Button>
        </div>

        <div></div>
      </div>
    </section>
  );
};

export default Hero;
