import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="stylesheet" as="script" href='/globals.css' />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
