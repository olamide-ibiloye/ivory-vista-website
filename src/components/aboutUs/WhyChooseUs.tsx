import React from "react";
import MaxWidthWrapper from "../maxWidthWrapper/MaxWidthWrapper";
import Header from "../text/Header";
import IvoryPortableText from "../portableText/IvoryPortableText";

type DataType = {
  title: string;
  subTitle: string;
  body: any[];
};

interface WhyChooseUsProps {
  data: DataType;
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ data }) => {
  const { title, subTitle, body } = data;

  return (
    <section>
      <div className="py-20">
        <MaxWidthWrapper>
          <div>
            <Header title={title} />

            <p className="my-10">{subTitle}</p>

            <IvoryPortableText content={body} />
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default WhyChooseUs;
