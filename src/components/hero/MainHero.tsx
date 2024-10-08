import React from "react";
import { Button } from "../ui/button";
import IvoryCarousel from "../carousel/IvoryCarousel";
import Image from "next/image";
import dots from "../../../public/dots.png";
import { getSlides, playfairDisplay } from "@/utils/utils";
import Link from "next/link";

export type DataType = {
  title: string;
  body: string;
  buttonName?: string;
  images: any[];
};

interface MainHeroProps {
  data: DataType;
}

const MainHero: React.FC<MainHeroProps> = ({ data }) => {
  const { title, body, buttonName, images } = data;

  const slides = getSlides(images);

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

        <div className="relative z-10 ml-auto mt-10 text-center md:left-[10%] md:mt-0 md:w-[75%] md:text-left 2xl:left-[20%] 3xl:left-[30%] 5xl:left-[35%]">
          <h1
            className={`text-4xl font-semibold md:text-7xl 2xl:max-w-[65%] 4xl:max-w-[40%] ${playfairDisplay.className} shadow-3xl text-balance`}
          >
            {title}
          </h1>

          <p className="py-8 md:max-w-[70%] 2xl:max-w-[50%] 4xl:max-w-[30%]">
            {body}
          </p>

          {/* {buttonName && (
            <Button className="h-[50px] w-[200px]" asChild>
              <Link href="/projects">{buttonName}</Link>
            </Button>
          )} */}
        </div>

        <div className="hidden max-w-[50%] md:block 2xl:max-w-[40%]">
          <IvoryCarousel slides={slides} />
        </div>
      </div>
    </section>
  );
};

export default MainHero;
