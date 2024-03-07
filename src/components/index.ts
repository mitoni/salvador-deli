import dynamic from "next/dynamic";

export const components = {
  centered: dynamic(() => import("./sections/centered/Centered")),
  columns: dynamic(() => import("./sections/columns/Columns")),
  bubble: dynamic(() => import("./sections/bubble/Bubble")),
  background_image: dynamic(
    () => import("./sections/background-image/BackgroundImage")
  ),

  // Bits
  script: dynamic(() => import("./bits/script/Script")),
  rich_text: dynamic(() => import("./bits/rich-text/RichText")),
  image: dynamic(() => import("./bits/image/Image")),
  buttons: dynamic(() => import("./bits/buttons/Buttons")),
  html: dynamic(() => import("./bits/html/HTML")),
};
