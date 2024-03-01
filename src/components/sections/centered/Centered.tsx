import { ComponentPropsWithRef } from "react";
import { Template } from "tinacms";
import { PageSectionsCentered } from "../../../../tina/__generated__/types";
import { Center } from "@mantine/core";
import { richText } from "../../bits/rich-text/RichText";
import { getComponentFromTypeName } from "../../../../utils/components";
import { bits } from "../../bits";
import { css } from "@emotion/css";
import Anchor from "../../bits/anchor/Anchor";
import { motion } from "framer-motion";

type Props = ComponentPropsWithRef<"div"> & PageSectionsCentered;

const MotionCenter = motion(Center as React.FunctionComponent);

function Centered(props: Props) {
  const { paragraphs, id, ...args } = props;

  return (
    <MotionCenter
      className={css`
        position: relative;
        padding: 0 0 var(--section-space) 0;
        text-align: center;
      `}
      initial={{ opacity: 0, translateY: 50 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      {...args}
    >
      <Anchor id={id} />

      {paragraphs?.map((paragraph, index) => {
        const name = getComponentFromTypeName(paragraph?.__typename);
        const Component = bits[name as keyof typeof bits];

        if (!Component) {
          throw new Error("No Component found");
        }

        return <Component key={index} {...(paragraph as any)} />;
      })}
    </MotionCenter>
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
      templates: [richText],
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
