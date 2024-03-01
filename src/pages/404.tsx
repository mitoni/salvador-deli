import { css } from "@emotion/css";
import { Box, Button, Center, Flex, Title } from "@mantine/core";
import Link from "next/link";

function _404() {
  return (
    <Flex
      className={css`
        height: 100vh;
        width: 100vw;
        overflow: hidden;
      `}
    >
      <Box
        className={css`
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(255, 255, 255, 1),
            rgba(255, 255, 255, 0.8)
          );
          backdrop-filter: blur(66px);
          z-index: 2;
        `}
      />

      <img
        src="/assets/imgs/hero-bg.jpg"
        alt="hero backround"
        className={css`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(1.25) saturate(5);
          z-index: 1;
        `}
      />

      <Flex
        direction="column"
        align="center"
        justify="center"
        className={css`
          width: 100%;
          height: 100vh;
          z-index: 3;
        `}
      >
        <Title order={3}>Page not found</Title>
        <Link href="/">
          <Button>Go Home</Button>
        </Link>
      </Flex>
    </Flex>
  );
}

export default _404;
