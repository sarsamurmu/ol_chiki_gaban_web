import { Html, Head, Main, NextScript } from 'next/document'
import { fontClassNames } from '@/fonts'

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body className={fontClassNames}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
