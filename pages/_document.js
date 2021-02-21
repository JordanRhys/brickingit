// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

import { createResolver } from "next-slicezone/resolver";

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    await createResolver();
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
};
