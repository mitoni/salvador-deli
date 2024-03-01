import { css } from "@emotion/css";
import { useMantineTheme } from "@mantine/core";
import NextImage, { ImageProps } from "next/image";
import { Template } from "tinacms";
import { tinaField } from "tinacms/dist/react";

type Props = ImageProps & {
  image: string;
};

function Image(props: Props) {
  const { image } = props;

  const theme = useMantineTheme();

  return (
    <div
      data-tina-field={tinaField(props, "image")}
      className={css`
        position: relative;
        width: 100%;
        height: 100%;
        min-height: 512px;
        filter: drop-shadow(0 0 100px #1a000000);

        @media (max-width: ${theme.breakpoints.sm}) {
          min-height: 100vw;
        }
      `}
    >
      {image ? (
        <NextImage
          src={image}
          alt=""
          fill={true}
          className={css`
            width: auto !important;
            clip-path: circle(45%);
            margin: 0 auto;
            object-fit: cover;
          `}
        />
      ) : null}
    </div>
  );
}

export const image: Template = {
  name: "image",
  label: "Image",
  fields: [
    {
      type: "image",
      label: "Image",
      name: "image",
    },
  ],
};

export default Image;
