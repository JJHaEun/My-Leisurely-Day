import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    font-size: 16px;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-weight: 400;
  }
  @font-face {
    font-family: "Somi";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_10@1.0/Somi.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
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
  @font-face {
    font-family: "Cafe24";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/Cafe24Ssurround.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
`;
