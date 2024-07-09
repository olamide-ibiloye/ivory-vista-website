import { Inter, Playfair_Display } from "next/font/google";
import { urlFor } from "../../sanity/utils/sanity/client";

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

export const inter = Inter({ subsets: ["latin"] });

export const getSlides = (images: any[]) => {
  return images.map(({ alt_text, image }) => ({
    alt_text: alt_text,
    image: urlFor(image).url(),
  }));
};
