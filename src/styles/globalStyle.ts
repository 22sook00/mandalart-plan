import { css } from "@emotion/react";

export const color = {
  main: "#00a1ff",
  sub: "#db2777",

  textDark: "#0f172a",
  textDefault: "#334155",
  textLight: "#5e6a7e",
  placeholderText: "#64748b",
  disabledText: "#cbd5e1",
  errorText: "#ff3c78",
  successText: "#17b9aa",

  border: "#d7dde7",

  defaultGray: "#dee2e6",
  lightGray: "#c1c8cf",
  lightestGray: "#e4ebf4",

  backgroundGray: "#eff3f8",
  hover: "#fafcff",

  defaultShadow:
    "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
};

export const globalStyles = css`
  @font-face {
    font-family: "SUIT";
    src: url("./fonts/SUIT-Regular.ttf");
  }
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css");
  * {
    margin: 0;
    padding: 0;
    font: inherit;
    box-sizing: border-box;
    font-family: "SUIT" !important;
  }
  /*.hidden-scroll {
    overflow: hidden;
  }*/
  *,
  :after,
  :before {
    box-sizing: border-box;
    flex-shrink: 0;
  }
  :root {
    box-sizing: border-box;
  }
  html {
    font-family: "SUIT", "Noto Sans", sans-serif;
  }
  html,
  body {
    height: 100vh;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  span {
    margin: 0;
    padding: 0;
  }
  p,
  span,
  li {
    font-size: 14px;
  }
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  button {
    background: none;
    border: 0;
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;
