import { css } from "@emotion/css";
import { Template } from "tinacms";
import { tinaField } from "tinacms/dist/react";

type Props = React.ComponentPropsWithoutRef<"div"> & {
  url?: string;
  position?: string;
  offset?: number;
};

function BackgroundImage(props: Props) {
  const { position, url, offset = 0, ...args } = props;
  return (
    <div
      data-tina-field={tinaField(props, "url")}
      className={css`
        position: absolute;
        ${position === "left" ? "left" : "right"}:0;
        transform: translate(
          ${position === "left" ? "-40%" : "40%"},
          ${-50 + offset}%
        );
        width: 60vw;
        height: 60vw;
        background-image: url(${url});
        background-size: contain;
        background-repeat: no-repeat;
        mix-blend-mode: multiply;
        z-index: -1;
      `}
      {...args}
    />
  );
}

export const background_image: Template = {
  name: "background_image",
  label: "Background Image",
  fields: [
    {
      name: "url",
      label: "Image",
      type: "image",
    },
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
      name: "offset",
      label: "Offset",
      type: "number",
    },
  ],
};

export default BackgroundImage;
