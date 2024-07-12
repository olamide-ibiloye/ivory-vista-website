import React from "react";
import MaxWidthWrapper from "../maxWidthWrapper/MaxWidthWrapper";
import Logo from "../navbar/logo/Logo";
import Link from "next/link";
import { Email, LocationOn, Phone } from "@mui/icons-material";
import footerBG from "../../../public/footerBG.png";
import { playfairDisplay } from "@/utils/utils";

const Footer = () => {
  const FooterLink = ({ href, name }: { href: string; name: string }) => (
    <Link href={href} className="text-[14px] font-light">
      {name}
    </Link>
  );

  return (
    <footer>
      <MaxWidthWrapper>
        <div
          className="relative w-full"
          style={{
            backgroundImage: `url(${footerBG.src})`,
            backgroundRepeat: "repeat-x",
            backgroundPosition: "bottom",
            backgroundSize: "contain",
          }}
        >
          <div className="absolute inset-0 bg-background opacity-90"></div>

          <div
            className={`${playfairDisplay.className} relative z-10 flex w-full flex-col items-start justify-start md:flex-row`}
          >
            <div className="flex flex-col items-start justify-start md:w-[40%]">
              <Logo classes="-my-5" />

              <div className="flex flex-col items-start justify-start gap-2">
                <div className="flex items-start justify-start gap-3 text-[14px] font-light">
                  <LocationOn />
                  Rydal Street, Merseyside, WA12 8JX
                </div>

                <div className="flex items-start justify-start gap-3 text-[14px] font-light">
                  <Phone />
                  +44 745 946 7863
                </div>

                <div className="flex items-start justify-start gap-3 text-[14px] font-light">
                  <Email />
                  info@ivoryvista.com
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col items-start justify-center gap-10 md:mt-20 md:w-[60%] md:flex-row">
              <div className="flex flex-col items-start justify-start gap-2">
                <h4 className="font-semibold">QUICK LINKS</h4>

                <FooterLink href="/" name="Home" />
                <FooterLink href="/about" name="About" />
                <FooterLink href="our-services" name="Our Services" />
                <FooterLink href="/projects" name="Projects" />
              </div>

              <div className="flex flex-col items-start justify-start gap-2">
                <h4 className="font-semibold">LEGAL LINKS</h4>
                <FooterLink href="" name="Terms & Conditions" />
                <FooterLink href="" name="Policy" />
              </div>

              <div className="flex flex-col items-start justify-start gap-2">
                <h4 className="font-semibold">SOCIAL MEDIA</h4>
                <FooterLink href="" name="Facebook" />
                <FooterLink href="" name="Instagram" />
                <FooterLink href="" name="LinkedIn" />
              </div>
            </div>
          </div>

          <p className="relative mt-10 py-5 text-[12px]">
            Copyright @ 2024 Ivory Vista LLC.
          </p>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
