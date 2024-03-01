import React from "react";
import { ComponentProps } from "react";
import { Collection } from "tinacms";
import { PagePartsFragment } from "../../../../tina/__generated__/types";
import { sections as sectionsComponents } from "../../sections";
import { centered } from "../../sections/centered/Centered";
import { columns } from "../../sections/columns/Columns";
import { css } from "@emotion/css";
import Hero from "../../sections/hero/Hero";
import Footer from "../../sections/footer/Footer";
import { getComponentFromTypeName } from "../../../../utils/components";
import { bubble } from "../../sections/bubble/Bubble";
import { background_image } from "../../sections/background-image/BackgroundImage";

type Props = ComponentProps<"main"> & PagePartsFragment;

function Page(props: Props) {
  const { sections } = props;

  return (
    <main
      // data-tina-field={tinaField(props, "sections")}
      className={css`
        width: 1024px;
        margin: 0 auto 0 auto;
      `}
    >
      <Hero />

      {sections?.map((section, index) => {
        const name = getComponentFromTypeName(section?.__typename);
        const Component =
          sectionsComponents[name as keyof typeof sectionsComponents];

        if (!Component) {
          throw new Error(`No component found`);
        }

        return <Component key={index} {...(section as any)} />;
      })}

      <Footer />
    </main>
  );
}

const page: Collection = {
  name: "page",
  label: "Page",
  path: "layout/page",
  ui: {
    router({ document }) {
      return document._sys.title;
    },
  },
  fields: [
    {
      name: "url",
      label: "URL",
      type: "string",
      required: true,
      isTitle: true,
      ui: {
        defaultValue: "/",
      },
    },
    {
      name: "sections",
      label: "Sections",
      type: "object",
      list: true,
      templates: [centered, columns, bubble, background_image],
    },
  ],
};

export { Page, page };
