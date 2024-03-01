import { css } from "@emotion/css";
import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"div">;

function Anchor(props: Props) {
  return (
    <div
      className={css`
        position: absolute;
        top: 0;
        left: 0;
        visibility: hidden;
        transform: translateY(-6rem);
      `}
      {...props}
    />
  );
}

export default Anchor;
