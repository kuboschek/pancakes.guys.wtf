import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
        <script async src="https://track.everyone.wtf/tracker.js" data-ackee-server="https://track.everyone.wtf" data-ackee-domain-id="4923a22a-91ff-45af-ab78-bd726543b3e0"></script>
        <script async src="https://inform.everyone.wtf/legal.min.js?small,fixed,noborder"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
};
