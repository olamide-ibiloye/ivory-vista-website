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
      className="h-full w-full max-w-xl"
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
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <Image
              src={slide}
              alt={`slide-${index + 1}`}
              priority
              className="h-full w-full"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default IvoryCarousel;
