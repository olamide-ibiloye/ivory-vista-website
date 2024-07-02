import { playfairDisplay } from "@/app/layout";
import React from "react";

const AboutUs = () => {
  return (
    <section>
      <div className="flex min-h-[500px] flex-col items-center justify-center py-20">
        <h1
          className={`text-3xl font-semibold md:text-5xl ${playfairDisplay.className}`}
        >
          About Us
        </h1>

        <p className="py-10 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>

        <div className="flex grid-cols-3 flex-col items-center justify-center gap-4 md:grid">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div
              key={idx}
              className={`h-[200px] w-[350px] rounded-xl ${idx % 2 === 0 ? "bg-orange-400" : "bg-orange-600"}`}
            >
              {idx}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
