import { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from '@vercel/analytics/next';
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <body className="antialiased overflow-x-hidden">
        <Analytics />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
