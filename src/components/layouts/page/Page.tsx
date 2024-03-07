import React from "react";
import Hero from "../../sections/hero/Hero";
import Footer from "../../sections/footer/Footer";
import { ComponentProps } from "react";
import { Collection } from "tinacms";
import { PagePartsFragment } from "../../../../tina/__generated__/types";
import { components } from "../../";
import { centered } from "../../sections/centered/Centered";
import { columns } from "../../sections/columns/Columns";
import { css } from "@emotion/css";
import { getComponentFromTypeName } from "../../../../utils/components";
import { bubble } from "../../sections/bubble/Bubble";
import { background_image } from "../../sections/background-image/BackgroundImage";
import { useMantineTheme } from "@mantine/core";
import { script } from "../../bits/script/Script";

type Props = ComponentProps<"main"> & PagePartsFragment;

function Page(props: Props) {
  const { sections } = props;

  const theme = useMantineTheme();

  return (
    <section
      // data-tina-field={tinaField(props, "sections")}
      className={css`
        max-width: 1024px;
        margin: 0 auto 0 auto;

        @media (max-width: ${theme.breakpoints.sm}) {
          padding: 0 ${theme.spacing.md};
        }
      `}
    >
      <Hero />

      {sections?.map((section, index) => {
        const name = getComponentFromTypeName(section?.__typename);
        const Component = components[name as keyof typeof components];

        if (!Component) {
          throw new Error(`No component found`);
        }

        return <Component key={index} {...(section as any)} />;
      })}

      <Footer />
    </section>
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
      templates: [centered, columns, bubble, background_image, script],
    },
  ],
};

export { Page, page };
