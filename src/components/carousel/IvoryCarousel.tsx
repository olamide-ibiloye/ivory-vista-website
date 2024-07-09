"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

const IvoryCarousel = ({ slides }: { slides: any[] }) => {
  return (
    <Carousel
      className="h-full w-full"
      opts={{
        align: "center",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 10000,
        }),
      ]}
    >
      <CarouselContent className="min-w-full">
        {slides.map((slide, index) => (
          <CarouselItem
            key={index}
            className="h-[400px] w-full md:h-[650px] md:basis-11/12"
          >
            <Image
              src={slide.image}
              alt={`slide-${index + 1}`}
              width={1000}
              height={1000}
              priority
              className="h-full w-full rounded-lg object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default IvoryCarousel;
