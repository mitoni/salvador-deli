import dynamic from "next/dynamic";

export const sections = {
  centered: dynamic(() => import("./centered/Centered")),
  columns: dynamic(() => import("./columns/Columns")),
  bubble: dynamic(() => import("./bubble/Bubble")),
  background_image: dynamic(() => import("./background-image/BackgroundImage")),
};
