import { css } from "@emotion/css";
import { useMantineTheme } from "@mantine/core";
import { ComponentPropsWithoutRef } from "react";
import { Template } from "tinacms";

type Props = ComponentPropsWithoutRef<"div"> & {
  position: "left" | "right";
  color1: string;
  color2: string;
};

function Bubble(props: Props) {
  const { position = "left", color1, color2, ...args } = props;

  const theme = useMantineTheme();

  return (
    <div
      className={css`
        position: absolute;
        left: 0;
        right: 0;
        height: 200vh;
        overflow: hidden;

        @media (max-width: ${theme.breakpoints.sm}) {
          height: 100vh;
        }
      `}
    >
      <div
        className={css`
          position: absolute;
          height: 100%;
          width: 100%;
          ${position === "left" ? "left" : "right"}:0;
          transform: translate(${position === "left" ? "-50%" : "50%"});
          background: radial-gradient(${color1}, ${color2});
          border-radius: 100%;
          pointer-events: none;
          opacity: 0.1;
          filter: blur(66px);

          @media (max-width: ${theme.breakpoints.sm}) {
            width: 200%;
          }
        `}
        {...args}
      />
    </div>
  );
}

export const bubble: Template = {
  name: "Bubble",
  label: "Bubble",
  fields: [
    {
      name: "position",
      label: "Position",
      type: "string",
      options: [
        {
          value: "left",
          label: "Left",
        },
        {
          value: "right",
          label: "Right",
        },
      ],
      ui: {
        component: "select",
      },
    },
    {
      name: "color1",
      label: "Color 1",
      type: "string",
      ui: {
        component: "color",
      },
    },
    {
      name: "color2",
      label: "Color 2",
      type: "string",
      ui: {
        component: "color",
      },
    },
  ],
};

export default Bubble;
