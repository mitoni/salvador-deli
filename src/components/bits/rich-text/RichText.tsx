import { Flex, Title, useMantineTheme } from "@mantine/core";
import { ComponentProps } from "react";
import { Template } from "tinacms";
import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";
import Wave from "../wave/Wave";
import { css } from "@emotion/css";
import Image from "next/image";
import Link from "next/link";
import { tinaField } from "tinacms/dist/react";

type Props = ComponentProps<typeof Flex> & {
  content: TinaMarkdownContent;
  text_align: "left" | "center" | "right";
  content_align: "start" | "center" | "end";
};

function RichText(props: Props) {
  const {
    content,
    text_align = "left",
    content_align = "start",
    ...args
  } = props;

  const theme = useMantineTheme();

  return (
    <Flex
      data-tina-field={tinaField(props, "content")}
      direction="column"
      justify={content_align}
      align="stretch"
      className={css`
        height: 100%;
        text-align: ${text_align};
      `}
      {...args}
    >
      <TinaMarkdown
        components={{
          h1: (props) => <Title {...props} order={1} />,
          h2: (props) => (
            <span
              className={css`
                position: relative;
              `}
            >
              <Title {...props} order={2} />
              <Wave
                strokeWidth={10}
                color={theme.colors.red[5]}
                className={css`
                  position: absolute;
                  width: 80px;
                  margin: 0 auto;
                  transform: translate(-50%, -60%);
                `}
              />
            </span>
          ),
          h3: (props) => <Title {...props} order={3} />,
          h4: (props) => <Title {...props} order={4} />,
          h5: (props) => <Title {...props} order={5} />,
          h6: (props) => <Title {...props} order={6} />,
          img: (props) => (
            <Image
              src={props?.url ?? ""}
              layout="fill"
              alt=""
              className={css`
                object-fit: contain;
              `}
              {...props}
            />
          ),
          a: (props) => (
            <Link
              className={css`
                position: relative;
                color: unset;
                text-decoration-color: ${theme.colors.red[5]};

                transition: color 200ms ease-in-out;

                &:hover {
                  color: ${theme.colors.red[5]};
                }
              `}
              href={props?.url ?? ""}
            >
              {props?.children}
            </Link>
          ),
          bold: (props) => (
            <b
              className={css`
                color: ${theme.colors.red[5]};
              `}
              {...props}
            />
          ),
        }}
        content={content}
      />
    </Flex>
  );
}

export const richText: Template = {
  name: "rich_text",
  label: "Rich Text",
  fields: [
    {
      name: "content",
      label: "Content",
      type: "rich-text",
      isBody: true,
    },
    {
      name: "text_align",
      label: "Align text",
      type: "string",
      options: [
        {
          value: "left",
          label: "Left",
        },
        {
          value: "center",
          label: "Center",
        },
        {
          value: "right",
          label: "Right",
        },
      ],
      ui: { component: "select" },
    },
    {
      name: "content_align",
      label: "Align content",
      type: "string",
      options: [
        {
          value: "start",
          label: "Top",
        },
        {
          value: "center",
          label: "Center",
        },
        {
          value: "end",
          label: "Bottom",
        },
      ],
      ui: { component: "select" },
    },
  ],
};

export default RichText;
