import * as React from "react";
import { ComponentPropsWithoutRef } from "react";
import { Collection } from "tinacms";
import { MenuPartsFragment } from "../../../../tina/__generated__/types";
import { Center, Flex, useMantineTheme } from "@mantine/core";
import { css } from "@emotion/css";

type Props = ComponentPropsWithoutRef<"div"> & MenuPartsFragment;

function MenuItem(
  props: ComponentPropsWithoutRef<"div"> & { url?: string; label?: string }
) {
  const { label, url } = props;

  const theme = useMantineTheme();

  return (
    <a
      className={css`
        text-decoration: unset;
        position: relative;
        min-width: 6rem;
        margin: 0 ${theme.spacing.lg};
        color: ${theme.colors.gray[8]};
        display: flex;
        flex-direction: column;
        align-items: center;

        &:hover:after {
          width: 100%;
          opacity: 1;
        }

        &:after {
          content: "";
          position: absolute;
          bottom: 0;
          height: 2px;
          border-radius: 1px;
          width: 1rem;
          background-color: ${theme.colors.red[5]};
          opacity: 0.5;
          transition: all 200ms ease-in-out;
        }
      `}
      href={url}
    >
      {label}
    </a>
  );
}

function Menu(props: Props) {
  const { links } = props;

  const theme = useMantineTheme();

  const [visibleBg, setVisibleBg] = React.useState(false);

  React.useEffect(() => {
    const windowHeigth = window.innerHeight;
    const triggerPoint = Math.floor(windowHeigth) / 4;

    function handleScroll() {
      const y = window.scrollY;
      setVisibleBg(y > triggerPoint);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Center
      className={css`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 9;
        margin: 1rem 1rem 1rem 0;

        @media (max-width: ${theme.breakpoints.sm}) {
          display: none;
        }
      `}
    >
      <Flex
        className={css`
          min-height: 4rem;
          margin: 0 auto;
          background-color: rgba(255, 255, 255, ${visibleBg ? 0.5 : 0});
          backdrop-filter: blur(100px);
          width: 100%;
          max-width: 1024px;
          border-radius: ${theme.radius.lg};
          filter: drop-shadow(0 0 100px #1a000000);
          transition: background-color 200ms ease-in-out;
        `}
        justify="center"
        align="center"
      >
        {links?.map((link, index) => (
          <MenuItem key={index} {...link} />
        ))}
      </Flex>
    </Center>
  );
}

export const menu: Collection = {
  name: "menu",
  label: "Menu",
  path: "sections/menu",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  fields: [
    {
      name: "links",
      label: "Links",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item.label };
        },
      },
      fields: [
        {
          name: "url",
          label: "URL",
          type: "string",
          required: true,
        },
        {
          name: "label",
          label: "Label",
          type: "string",
          required: true,
          isTitle: true,
        },
      ],
    },
  ],
};

export default Menu;
