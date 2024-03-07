import { Grid, useMantineTheme } from "@mantine/core";
import { ComponentPropsWithoutRef } from "react";
import { Template } from "tinacms";
import { richText } from "../../bits/rich-text/RichText";
import { PageSectionsColumns } from "../../../../tina/__generated__/types";
import { css } from "@emotion/css";
import { getComponentFromTypeName } from "../../../../utils/components";
import { image } from "../../bits/image/Image";
import Anchor from "../../bits/anchor/Anchor";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mantine/hooks";
import { components } from "../..";
import { script } from "../../bits/script/Script";

type Props = ComponentPropsWithoutRef<"section"> & PageSectionsColumns;

const MotionCol = motion(Grid.Col);

function Columns(props: Props) {
  const { blocks, width, id, ...args } = props;

  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Grid
      className={css`
        position: relative;
        padding: 0 0 var(--section-space) 0;
      `}
      align="stretch"
      {...args}
    >
      <Anchor id={id} />

      {blocks?.map((block, index) => {
        return (
          <MotionCol
            component={motion.div}
            key={index}
            span={{ sm: 12, md: width ?? 6 }}
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true, amount: isMobile ? 0 : 0.5 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {block?.paragraphs?.map((paragraph, index) => {
              const name = getComponentFromTypeName(paragraph?.__typename);
              const Component = components[name as keyof typeof components];

              if (!Component) {
                throw new Error("Component not found!");
              }

              return <Component key={index} {...(paragraph as any)} />;
            })}
          </MotionCol>
        );
      })}
    </Grid>
  );
}

export const columns: Template = {
  name: "columns",
  label: "Columns",
  ui: {
    itemProps: (item) => {
      const cols = item.blocks ? +item.blocks?.length : "";
      return { label: `${cols ?? ""} Columns` };
    },
  },
  fields: [
    {
      name: "blocks",
      label: "Blocks",
      type: "object",
      list: true,
      fields: [
        {
          name: "paragraphs",
          label: "Paragraphs",
          type: "object",
          list: true,
          templates: [richText, image, script],
        },
      ],
    },
    {
      name: "width",
      label: "Block width",
      description: "Single column width based on a full width of 12",
      type: "number",
      ui: {
        defaultValue: 6,
      },
    },
    {
      name: "id",
      label: "Unique ID",
      description: "Unique identifier of the section, used for links",
      type: "string",
    },
  ],
};

export default Columns;
