import Image from "next/image";
import dots from "../../../public/dots.png";
import { getSlides, playfairDisplay } from "@/utils/utils";
import { DataType } from "./MainHero";

interface OtherHeroProps {
  data: DataType;
}

const OtherHero: React.FC<OtherHeroProps> = ({ data }) => {
  const { title, body, images } = data;

  const slides = getSlides(images);

  return (
    <section className="relative overflow-x-hidden">
      <div className="flex min-h-[800px] flex-col items-center justify-center py-10 md:py-20 lg:flex-row">
        <div className="absolute bottom-5 left-10 z-10">
          <Image
            src={dots}
            alt="dot style"
            className="max-md:h-20 max-md:w-20"
          />
        </div>

        <div className="relative z-10 mt-10 text-center max-lg:mb-10 md:left-[10%] md:mt-0 md:text-left lg:w-[40%] 2xl:left-[15%]">
          <h1
            className={`text-balance text-5xl font-semibold md:text-7xl ${playfairDisplay.className} shadow-3xl`}
          >
            {title}
          </h1>

          <p className="py-8 md:max-w-[70%] 2xl:max-w-[50%]">{body}</p>
        </div>

        <div className="flex h-[300px] items-center justify-center gap-5 lg:h-[500px] lg:justify-start">
          {slides.map((slide, idx) => (
            <Image
              key={idx}
              src={slide.image}
              alt={slide.alt_text}
              blurDataURL={slide.lqip}
              placeholder="blur"
              width={1000}
              height={1000}
              className={`h-full w-[300px] min-w-[300px] rounded-lg object-cover ${idx % 2 !== 0 ? "mb-20" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherHero;
