import React from "react";
import { css } from "@emotion/css";
import { Button, Flex, useMantineTheme } from "@mantine/core";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import { Template } from "tinacms";
import { tinaField } from "tinacms/dist/react";
import * as icons from "react-feather";

type Props = ComponentPropsWithoutRef<"div"> & {
  button?: {
    content?: "string";
    variant?: "primary" | "light" | "outline";
    href?: string;
    target?: "_blank" | "_self";
    icon?: keyof typeof icons;
  }[];
  align?: "start" | "center" | "end";
};

function Buttons(props: Props) {
  const { align, button, ...args } = props;

  const theme = useMantineTheme();

  return (
    <Flex
      data-tina-field={tinaField(props, "button")}
      direction="row"
      justify={align}
      align="center"
      className={css`
        width: 100%;
        padding: ${theme.spacing.xl} 0;
      `}
      {...args}
    >
      {button?.map((button, index) => {
        const Icon = button?.icon ? icons[button.icon] : null;
        return (
          <Link
            key={index}
            href={button.href ?? ""}
            target={button.target ?? "_self"}
          >
            <Button
              data-tina-field={tinaField(button, "content")}
              variant={button.variant ?? "primary"}
              leftSection={Icon ? <Icon size={15} /> : null}
            >
              {button?.content}
            </Button>
          </Link>
        );
      })}
    </Flex>
  );
}

export const buttons: Template = {
  name: "buttons",
  label: "Buttons",
  fields: [
    {
      name: "button",
      label: "Buttons",
      list: true,
      type: "object",
      ui: {
        itemProps: (item) => {
          return { label: item.content };
        },
      },
      fields: [
        {
          name: "content",
          label: "Content",
          type: "string",
        },
        {
          name: "icon",
          label: "Icon",
          type: "string",
          options: Object.keys(icons),
        },
        {
          name: "href",
          label: "URL",
          type: "string",
        },
        {
          name: "variant",
          label: "Variant",
          type: "string",
          options: [
            {
              value: "primary",
              label: "Primary",
            },
            {
              value: "light",
              label: "Light",
            },
            {
              value: "outline",
              label: "Outline",
            },
          ],
        },
        {
          name: "target",
          label: "Open in",
          type: "string",
          options: [
            {
              value: "_blank",
              label: "New",
            },
            {
              value: "_self",
              label: "Current",
            },
          ],
        },
      ],
    },
    {
      name: "align",
      label: "Align",
      type: "string",
      options: [
        {
          value: "start",
          label: "Left",
        },
        {
          value: "center",
          label: "Center",
        },
        {
          value: "end",
          label: "Right",
        },
      ],
      ui: { component: "select" },
    },
  ],
};

export default Buttons;
