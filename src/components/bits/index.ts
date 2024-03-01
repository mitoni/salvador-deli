import dynamic from "next/dynamic";

export const bits = {
  rich_text: dynamic(() => import("../bits/rich-text/RichText")),
  image: dynamic(() => import("../bits/image/Image")),
};
