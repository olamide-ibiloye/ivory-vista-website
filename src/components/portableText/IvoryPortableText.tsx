import React from "react";
import {
  PortableText,
  PortableTextComponentProps,
  PortableTextComponents,
} from "@portabletext/react";

const serializers: PortableTextComponents = {
  types: {
    // Define how to render different block types, if necessary
  },
  marks: {
    // Define how to render different marks (like links, bold, etc.), if necessary
  },
  block: {
    // Ex. 1: customizing common block types
    h3: ({ children }) => <h1 className="mb-4 text-2xl">{children}</h1>,
  },
  list: {
    bullet: ({ children }: PortableTextComponentProps<any>) => (
      <ul className="custom-bullet-list">{children}</ul>
    ),
    number: ({ children }: PortableTextComponentProps<any>) => (
      <ol className="custom-number-list">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: PortableTextComponentProps<any>) => (
      <li className="custom-bullet-item">{children}</li>
    ),
    number: ({ children }: PortableTextComponentProps<any>) => (
      <li className="custom-number-item">{children}</li>
    ),
  },
};

const IvoryPortableText = ({ content }: { content: any }) => {
  return <PortableText value={content} components={serializers} />;
};

export default IvoryPortableText;
