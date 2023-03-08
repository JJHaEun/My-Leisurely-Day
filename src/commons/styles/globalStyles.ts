import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    font-size: 16px;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  @font-face {
    font-family: "nanum_somi";
    src: url("/font/nanum_somi.ttf");
  }
  @font-face {
    font-family: "UhBeeRice";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_five@.2.0/UhBeeRice.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "KOTRA_BOLD-Bold";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.1/KOTRA_BOLD-Bold.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
`;
