import { css } from "@emotion/css";
import { ComponentPropsWithoutRef } from "react";
import { Template } from "tinacms";

type Props = ComponentPropsWithoutRef<"div"> & {
  position: "left" | "right";
  color1: string;
  color2: string;
};

function Bubble(props: Props) {
  const { position = "left", color1, color2, ...args } = props;

  return (
    <div
      className={css`
        position: absolute;
        ${position === "left" ? "left" : "right"}:0;
        transform: translate(${position === "left" ? "-50%" : "50%"}, -50%);
        width: 200vh;
        height: 200vh;
        background: radial-gradient(${color1}, ${color2});
        opacity: 0.1;
        border-radius: 100%;
        filter: blur(66px);
        pointer-events: none;
      `}
      {...args}
    >
      Bubble
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
