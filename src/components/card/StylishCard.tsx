import Image from "next/image";
import React from "react";
import service1 from "../../../public/Service 1.jpg";
import { playfairDisplay } from "@/utils/utils";

const StylishCard = ({
  image = service1,
  title = "Portfolio Management",
  subtitle = "We take the hassle out of finding your next tenant",
  body = "Everything from marketing your property to moving in your tenant is all handled by our team. You set the requirements and we screen the tenants to find you the perfect match. No upfront fees.",
  left = false,
}) => {
  return (
    <div className="my-10 md:my-20">
      <div className={`relative ${left ? "flex justify-end" : ""}`}>
        <div
          className={`w-full bg-muted-foreground p-5 text-background md:w-[80%] md:p-0 ${left ? "flex flex-col items-end justify-end" : ""}`}
        >
          <div
            className={`absolute ${left ? "left-0 top-10" : "bottom-10 right-0"} z-10 hidden h-[450px] w-[40%] md:block`}
          >
            <Image src={image} alt="" className="h-full w-full rounded-lg" />
          </div>

          <div className={`h-[350px] w-full md:hidden ${left ? "" : ""}`}>
            <Image src={service1} alt="" className="h-full w-full rounded-lg" />
          </div>

          <div
            className={`flex h-full flex-col items-start justify-start py-5 md:min-h-[450px] md:w-[75%] md:justify-center md:p-10 lg:p-20 ${left ? "md:text-right" : ""}`}
          >
            <h3
              className={`w-full text-2xl font-medium md:text-4xl ${playfairDisplay.className}`}
            >
              {title}
            </h3>

            <p className="w-full py-5 text-[17px] md:text-xl">{subtitle}</p>

            <p className="text-[14px] md:text-[16px]">{body}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StylishCard;
