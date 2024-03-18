import { ComponentPropsWithRef } from "react";
import { Template } from "tinacms";
import { PageSectionsCentered } from "../../../../tina/__generated__/types";
import { Flex, useMantineTheme } from "@mantine/core";
import { richText } from "../../bits/rich-text/RichText";
import { getComponentFromTypeName } from "../../../../utils/components";
import { components } from "../../";
import { css } from "@emotion/css";
import Anchor from "../../bits/anchor/Anchor";
import { buttons } from "../../bits/buttons/Buttons";
import { script } from "../../bits/script/Script";
import { html } from "../../bits/html/HTML";

type Props = ComponentPropsWithRef<"div"> & PageSectionsCentered;

function Centered(props: Props) {
  const { paragraphs, id, ...args } = props;

  const theme = useMantineTheme();

  return (
    <Flex
      direction="column"
      align="center"
      className={css`
        position: relative;
        padding: 0 0 var(--section-space) 0;
        text-align: center;
      `}
      {...args}
    >
      <Anchor id={id} />

      {paragraphs?.map((paragraph, index) => {
        const name = getComponentFromTypeName(paragraph?.__typename);
        const Component = components[name as keyof typeof components];

        if (!Component) {
          throw new Error("No Component found");
        }

        return <Component key={index} {...(paragraph as any)} />;
      })}
    </Flex>
  );
}

export const centered: Template = {
  name: "centered",
  label: "Centered",
  fields: [
    {
      name: "paragraphs",
      label: "Paragraphs",
      type: "object",
      list: true,
      templates: [richText, buttons, script, html],
    },
    {
      name: "id",
      label: "Unique ID",
      description: "Unique identifier of the section, used for links",
      type: "string",
    },
  ],
};

export default Centered;
