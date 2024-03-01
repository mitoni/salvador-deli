import { css } from "@emotion/css";
import { Flex, Text, useMantineTheme } from "@mantine/core";

function Footer() {
  const theme = useMantineTheme();

  return (
    <Flex
      direction="row"
      align="center"
      className={css`
        min-height: 500px;
      `}
    >
      <Text
        className={css`
          color: ${theme.colors.red[5]};
        `}
      >
        Salvador Deli
        <br />
        Vero Beach, FL
      </Text>
    </Flex>
  );
}

export default Footer;
