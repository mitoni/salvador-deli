import { css } from "@emotion/css";
import { Box, Center, Flex, useMantineTheme } from "@mantine/core";
import Squiggle from "../../bits/squiggle/Squiggle";

function Hero() {
  const theme = useMantineTheme();

  return (
    <Flex
      className={css`
        height: 133vh;
        width: 100%;
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

      <Center
        className={css`
          width: 100%;
          height: 100vh;
        `}
      >
        <div
          className={css`
            position: relative;
            width: 50%;
            height: 50%;
            z-index: 3;
          `}
        >
          <div
            className={css`
              width: 100%;
              height: 100%;
              background-color: ${theme.colors.gray[9]};
              mask-image: url(/assets/imgs/hero_logo.png);
              mask-size: contain;
              mask-repeat: no-repeat;
              mask-position: center center;
            `}
          />
        </div>
      </Center>

      <Flex
        justify="center"
        className={css`
          position: absolute;
          bottom: 0;
          right: 0;
          left: 0;
          height: 200px;
          z-index: 3;
          transform: translateY(50%);
        `}
      >
        <Squiggle height="100%" color={theme.colors.red[5]} strokeWidth={3} />
      </Flex>
    </Flex>
  );
}

export default Hero;
