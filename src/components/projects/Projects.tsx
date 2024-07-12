import React from "react";
import Header from "../text/Header";
import Image from "next/image";
import projects1 from "../../../public/Projects 1.jpg";
import projects2 from "../../../public/Projects 2.jpg";
import MaxWidthWrapper from "../maxWidthWrapper/MaxWidthWrapper";
import { playfairDisplay } from "@/utils/utils";
import { Button } from "../ui/button";
import Link from "next/link";

type DataType = {
  title: string;
  body: string;
};

interface ProjectsProps {
  data: DataType;
}

const Projects: React.FC<ProjectsProps> = ({ data }) => {
  const { title, body } = data;

  const ProjectCard = ({
    image,
    title,
    body,
    reverse = false,
  }: {
    image: any;
    title: string;
    body: string;
    reverse?: boolean;
  }) => {
    return (
      <div
        className={`flex h-full w-full items-center justify-center gap-5 ${reverse ? "flex-col-reverse md:flex-row-reverse" : "flex-col md:flex-row"}`}
      >
        <div className="h-[300px] w-full md:w-[50%]">
          <Image
            src={image}
            alt=""
            width={1000}
            height={1000}
            className="h-full w-full rounded-lg object-cover"
          />
        </div>

        <div className="h-[300px] w-full rounded-lg bg-muted-foreground p-10 text-background dark:bg-foreground/90 md:w-[50%]">
          <h3
            className={`mb-3 text-xl font-medium md:text-2xl ${playfairDisplay.className}`}
          >
            {title}
          </h3>

          <p className="text-[15px] lg:text-[16px]">
            {`${body} `}
            <span className="cursor-pointer font-medium">Read more</span>
          </p>
        </div>
      </div>
    );
  };

  return (
    <section>
      <MaxWidthWrapper>
        <div className="ivory-section">
          <Header title={title} />

          <p className="py-10 text-center lg:w-[90%]">{body}</p>

          <div className="flex flex-col items-center justify-center gap-4">
            <ProjectCard
              image={projects1}
              title="Project 1"
              body="Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet. Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit..."
            />

            <ProjectCard
              image={projects2}
              title="Project 2"
              body="Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet. Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit..."
              reverse
            />
          </div>

          <Button
            className="mt-10 h-[50px] w-[200px] border-primary"
            variant="outline"
            asChild
          >
            <Link href="/projects">View More</Link>
          </Button>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Projects;
