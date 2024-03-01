import { createTheme } from "@mantine/core";

export const theme = createTheme({
  fontFamily: "Outfit",
  primaryColor: "gray",
  primaryShade: 9,
  headings: {
    fontFamily: "Boska",
    sizes: {
      h1: { fontSize: "5.61rem", lineHeight: "200%" },
      h2: { fontSize: "4.209rem", lineHeight: "200%" },
      h3: { fontSize: "3.157rem", lineHeight: "200%" },
      h4: { fontSize: "2.369rem", lineHeight: "200%" },
      h5: { fontSize: "1.777rem", lineHeight: "200%" },
      h6: { fontSize: "1.333rem", lineHeight: "200%" },
    },
  },
});
