import { Html, Head, Main, NextScript } from "next/document";

export default function Document(): JSX.Element {
  return (
    <Html lang="ko">
      <Head />
      <meta property="og:title" content="느린하루" />
      {/* <meta property="og:image" content={``} /> */}
      <meta property="og:description" content="휴식과 충전, 느린하루" />
      {/* <link
        rel="shortcut icon"
        type="image/x-icon"
        href="/image/icon-dog.svg"
      /> */}
      {/* 위쪽은 title옆의 작은 아이콘이 될 이미지 넣는 부분 */}
      <title>휴식과 충전 , 느린하루</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
