import React from "react";
import MaxWidthWrapper from "../maxWidthWrapper/MaxWidthWrapper";
import IvoryPortableText from "../portableText/IvoryPortableText";
import Header from "../text/Header";

type DataType = {
  title: string;
  body: any[];
};

interface WhoWeAreProps {
  data: DataType;
}

const WhoWeAre: React.FC<WhoWeAreProps> = ({ data }) => {
  const { title, body } = data;

  return (
    <section>
      <div className="bg-muted-foreground py-20 text-background dark:bg-foreground/90">
        <MaxWidthWrapper>
          <div>
            <Header title={title} classes="text-center mb-10 " />

            <IvoryPortableText content={body} />
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default WhoWeAre;
